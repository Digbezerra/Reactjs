export function Display({ totalBillValue, billValue, totalTipPercentage }) {
  return (
    <>
      <h2>
        You'll pay R${totalBillValue} (${billValue} + {totalTipPercentage}%)
      </h2>
    </>
  );
}
