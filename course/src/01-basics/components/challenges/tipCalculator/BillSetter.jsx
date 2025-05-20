export function BillSetter({ billValue, onSetBillValue }) {
  return (
    <>
      <p>How much was the bill?</p>{" "}
      <input
        value={billValue}
        type="number"
        placeholder="R$ 00,00"
        onChange={(e) => onSetBillValue(Number(e.target.value))}
      />
    </>
  );
}
