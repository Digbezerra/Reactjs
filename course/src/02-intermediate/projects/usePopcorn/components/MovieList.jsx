import { MovieItem } from "./MovieItem";

export function MovieList({ movies, onSelectMovie }) {
  return (
    <>
      <ul className="list">
        {movies?.map((movie) => (
          <MovieItem
            movie={movie}
            key={movie.imdbID}
            onSelectMovie={onSelectMovie}
          />
        ))}
      </ul>
    </>
  );
}
