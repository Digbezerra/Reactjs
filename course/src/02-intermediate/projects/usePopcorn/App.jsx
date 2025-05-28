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

const KEY = "c6966a00";

export function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const query = "wars";

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`
        );

        if (!res.ok)
          throw new Error("Something went wront with fetching movies");

        const data = await res.json();
        setMovies(data.Search);
        if (data.Response === "False") setError(data.Error);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <NavBar>
        <SearchBar />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
