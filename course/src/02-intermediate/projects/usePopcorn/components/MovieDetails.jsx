import { useEffect, useState } from "react";
import { StarRating } from "./StarRating";

import { KEY } from "../mock/moviesData";
import { Loader } from "./Loader";
import { ErrorMessage } from "./ErrorMessage";

export function MovieDetails({
  imdbid,
  handleSelectedId,
  onAddWatchedMovie,
  watched,
  selectedId,
  // isWatchedMovie,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movieDetails, setMovieDetails] = useState({});
  const [userRating, setUserRating] = useState(null);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${imdbid}`
        );
        if (!res.ok)
          throw new Error("Something went wront with fetching movies");
        const data = await res.json();
        if (data.Response === "False") setError(data.Error);
        setMovieDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [imdbid]);

  const {
    imdbID,
    Title: title,
    Actors: actors,
    Director: director,
    Poster: poster,
    Genre: genre,
    Released: released,
    imdbRating,
    Plot: plot,
    Runtime: runtime,
  } = movieDetails;

  const handleAddWatchedMovie = () => {
    const newWatchedMovie = {
      imdbID,
      imdbRating: Number(imdbRating),
      title,
      poster,
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    onAddWatchedMovie(newWatchedMovie);
    handleSelectedId(null);
  };

  const handleRating = (rating) => {
    setUserRating(rating);
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <div className="details">
          <header>
            <img src={poster} alt={title} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>{released}</p>
              <p>{genre}</p>
              <p>⭐ {imdbRating} IMDb Rating</p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={handleRating}
                    userRating={userRating}
                    key={imdbid}
                  />
                  {userRating ? (
                    <button className="btn-add" onClick={handleAddWatchedMovie}>
                      + add as watched
                    </button>
                  ) : (
                    <button className="btn-disabled" disabled>
                      Rate the movie
                    </button>
                  )}
                </>
              ) : (
                <p>You rated this movie: {watchedUserRating} ⭐</p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>
              <strong>Starring:</strong> {actors}
            </p>
            <p>
              <strong>Directed By:</strong> {director}
            </p>
          </section>
          <button className="btn-back" onClick={() => handleSelectedId(null)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M19 12H6M12 5l-7 7 7 7" />
            </svg>
          </button>
        </div>
      )}
      {error && <ErrorMessage message={error} />}
    </>
  );
}
