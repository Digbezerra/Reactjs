import { StarRating } from "./StarRating";

export function MovieDetails({ imdbID, movieDetails }) {
  const {
    Title,
    Actors,
    Director,
    Poster,
    Genre,
    Released,
    imdbRating,
    Plot,
    Runtime,
  } = movieDetails;
  return (
    <>
      <div className="details">
        <header>
          <img src={Poster} alt={Title} />
          <div className="details-overview">
            <h2>{Title}</h2>
            <p>{Released}</p>
            <p>{Genre}</p>
            <p>⭐ {imdbRating} IMDb Rating</p>
          </div>
        </header>
        <section>
          <div className="rating">
            <StarRating maxRating={10} size={24} />
          </div>
          <p>
            <em>{Plot}</em>
          </p>
          <p>
            <strong>Starring:</strong> {Actors}
          </p>
          <p>
            <strong>Directed By:</strong> {Director}
          </p>
        </section>
      </div>
    </>
  );
}
