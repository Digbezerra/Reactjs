import { MovieItemRating } from "./MovieItemRating";

export function WatchedList({ watched }) {
  return (
    <>
      <ul className="list">
        {watched.map((movie) => (
          <MovieItemRating movie={movie} key={movie.imdbID} />
        ))}
      </ul>
    </>
  );
}
