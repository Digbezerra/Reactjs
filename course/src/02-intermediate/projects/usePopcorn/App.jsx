import { useEffect, useState } from "react";

import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";
import { SearchBar } from "./components/SearchBar";
import { NumResults } from "./components/NumResults";
import { MovieList } from "./components/MovieList";
import { WatchedList } from "./components/WatchedList";
import { WatchedSummary } from "./components/WatchedSummary";

import "./index.css";

import { Box } from "./components/Box";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import { MovieDetails } from "./components/MovieDetails";

const KEY = "c6966a00";

export function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [movieDetails, setMovieDetails] = useState([]);

  const handleSelectedId = (imdbID) => {
    setSelectedId(imdbID);
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`
        );

        if (!res.ok)
          throw new Error("Something went wront with fetching movies");

        const data = await res.json();
        if (data.Response === "False") setError(data.Error);
        setMovies(data.Search);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchMovies();
  }, [query]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoadingSummary(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        if (!res.ok)
          throw new Error("Something went wront with fetching movies");

        const data = await res.json();
        if (data.Response === "False") setError(data.Error);
        setMovieDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoadingSummary(false);
      }
    }
    if (selectedId.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchMovies();
  }, [selectedId]);

  return (
    <>
      <NavBar>
        <SearchBar query={query} onSetQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelect={handleSelectedId} />
          )}
          {error && <ErrorMessage message={error} />}
          {!query && <ErrorMessage message="Search a movie" />}
        </Box>
        <Box>
          {isLoadingSummary && <Loader />}
          {selectedId && !isLoadingSummary && !error && (
            <MovieDetails imdbID={selectedId} movieDetails={movieDetails} />
          )}
          {!selectedId && (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
