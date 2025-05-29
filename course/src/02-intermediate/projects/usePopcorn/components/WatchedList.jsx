import { MovieItemRating } from "./MovieItemRating";

export function WatchedList({ watched, onSelectMovie, onDeleteMovie }) {
  return (
    <>
      <ul className="list">
        {watched?.map((movie) => (
          <MovieItemRating
            movie={movie}
            key={movie.imdbID}
            onSelectMovie={onSelectMovie}
            onDeleteMovie={onDeleteMovie}
          />
        ))}
      </ul>
    </>
  );
}
