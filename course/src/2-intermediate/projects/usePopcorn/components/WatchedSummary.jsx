const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => {
    return acc + cur / arr.length;
  }, 0);

export function WatchedSummary({ watched }) {
  const avgImdbRating = average(
    watched.map((movie) => Number(movie.imdbRating))
  );
  const avgUserRating = average(
    watched
      .filter((item) => typeof item !== "number")
      .map((movie) => movie.userRating)
  );
  const avgRuntime = average(
    watched
      .filter((item) => typeof item !== "number")
      .map((movie) => movie.runtime)
  );

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{Number(avgImdbRating).toFixed(1)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{Number(avgUserRating).toFixed(1)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{Number(avgRuntime).toFixed(1)} min</span>
        </p>
      </div>
    </div>
  );
}
