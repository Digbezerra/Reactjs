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

import { useMovies } from "./hooks/useMovie";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

export function App() {
  const [query, setQuery] = useState("");
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  const handleSelectedId = (imdbID) => {
    setSelectedId(imdbID);
  };

  const handleAddWatchedMovie = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteMovie = (imdbID) => {
    const newWatchedMovies = watched.filter((item) => item.imdbID !== imdbID);
    setWatched(newWatchedMovies);
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  useEffect(() => {
    document.title = "UsePopcorn";
  }, []);

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
            <MovieList movies={movies} onSelectMovie={handleSelectedId} />
          )}
          {error && <ErrorMessage message={error} />}
          {!query && <ErrorMessage message="Search a movie" />}
        </Box>
        <Box>
          {isLoadingSummary && <Loader />}
          {selectedId && !isLoadingSummary && !error && (
            <MovieDetails
              imdbid={selectedId}
              handleSelectedId={setSelectedId}
              onAddWatchedMovie={handleAddWatchedMovie}
              watched={watched}
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              // isWatchedMovie={watchedMovie}
            />
          )}
          {!selectedId && (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList
                watched={watched}
                onSelectMovie={handleSelectedId}
                onDeleteMovie={handleDeleteMovie}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
