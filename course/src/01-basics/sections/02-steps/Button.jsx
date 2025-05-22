export function Button({ action, bgColor, textColor, children }) {
  return (
    <button
      onClick={() => action()}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}
