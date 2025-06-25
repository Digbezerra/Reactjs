import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./pages/AppLayout/AppLayout";
import HomePage from "./pages/HomePage/Homepage";
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import PageNotFound from "./pages/PageNotFound";

import "./index.css";
import Login from "./pages/Login/Login";
import CityList from "./components/City/CityList";
import CountryList from "./components/Country/CountryList";
import City from "./components/City/City";

const BASE_URL = "http://localhost:8000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        throw new Error("Error when trying to fetch cities");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();

    // fetch("http://localhost:8000/cities")
    //   .then((res) => res.json())
    //   .then((data) => setCities(data))
    //   .catch((err) => setError(err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// "@types/react": "^18.2.15",
// "@types/react-dom": "^18.2.7",
// "@vitejs/plugin-react": "^4.0.3",
// "eslint": "^8.45.0",
// "eslint-plugin-react": "^7.32.2",
// "eslint-plugin-react-hooks": "^4.6.0",
// "eslint-plugin-react-refresh": "^0.4.3",
// "vite": "^4.4.5"
