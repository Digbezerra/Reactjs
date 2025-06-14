export function SatisfySetter({ data, tipPercentage, onSetPercentage }) {
  return (
    <>
      <p>How did you like the service?</p>{" "}
      <select
        id="tip"
        name="tip"
        value={tipPercentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        {data.map((item) => {
          return (
            <option value={item.tipPercentage}>
              {item.satisfyStatus} ({item.tipPercentage}%)
            </option>
          );
        })}
      </select>
    </>
  );
}
