import "./index.css";

import { useState, useEffect } from "react";

export function App() {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [convertedCurrency, setConvertedCurrency] = useState(0);
  const [base, setBase] = useState("EUR");
  const [rate, setRate] = useState("USD");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCurrency() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${base}&to=${rate}`,
          { signal: controller.signal }
        );
        if (!res.ok) {
          setConvertedCurrency(0);
          throw new Error("something went wrong fetching currency exchanger");
        }

        const data = await res.json();

        if (data.response === "False") {
          setError(data.Error);
        }
        setConvertedCurrency(data.rates[rate]);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (value === 0 || !value) {
      setValue("");
      setError("");
    }
    fetchCurrency();
    return () => {
      controller.abort();
    };
  }, [value, base, rate]);

  return (
    <>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={base} onChange={(e) => setBase(e.target.value)}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select value={rate} onChange={(e) => setRate(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <p>OUTPUT {convertedCurrency}</p>
      </div>
    </>
  );
}
