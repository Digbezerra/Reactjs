export function Button({ children, action }) {
  return <button onClick={() => action()}>{children}</button>;
}
