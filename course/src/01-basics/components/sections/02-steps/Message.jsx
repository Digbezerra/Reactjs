export function Message({ step, children }) {
  return (
    <>
      <p className="message">
        <span>Step {step}: </span>
        {children}
      </p>
    </>
  );
}
