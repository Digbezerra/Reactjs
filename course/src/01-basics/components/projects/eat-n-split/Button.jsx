export function Button({ children, handleAddFriend }) {
  return <button onClick={handleAddFriend}>{children}</button>;
}
