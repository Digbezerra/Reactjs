import { useState } from "react";

import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";

import { tempMovieData, tempWatchedData } from "./mock/moviesData";

import "./index.css";

export function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar movies={movies} />
      <Main movies={movies} watched={watched} />
    </>
  );
}
