import { MovieItemRating } from "./MovieItemRating";

export function WatchedList({ watched, onSelectMovie }) {
  return (
    <>
      <ul className="list">
        {watched?.map((movie) => (
          <MovieItemRating
            movie={movie}
            key={movie.imdbID}
            onSelectMovie={onSelectMovie}
          />
        ))}
      </ul>
    </>
  );
}
