export function MovieItem({ movie, onSelectMovie }) {
  return (
    <li
      key={movie.imdbID}
      onClick={() => onSelectMovie(movie.imdbID)}
      className="movie-item"
    >
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
