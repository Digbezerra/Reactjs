export function MovieItem({ movie, onSelect }) {
  return (
    <li
      key={movie.imdbID}
      onClick={() => onSelect(movie.imdbID)}
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
