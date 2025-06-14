export function ErrorMessage({ message }) {
  return (
    <>
      <p className="error">
        <span>{message === "Search a movie" ? "🎬" : "⛔"} </span>
        {message}
      </p>
    </>
  );
}
