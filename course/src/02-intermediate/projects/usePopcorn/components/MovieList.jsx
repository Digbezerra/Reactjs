import { MovieItem } from "./MovieItem";

export function MovieList({ movies, onSelect }) {
  return (
    <>
      <ul className="list">
        {movies?.map((movie) => (
          <MovieItem movie={movie} key={movie.imdbID} onSelect={onSelect} />
        ))}
      </ul>
    </>
  );
}
