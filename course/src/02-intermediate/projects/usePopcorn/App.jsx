import { useState } from "react";

import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";
import { SearchBar } from "./components/SearchBar";
import { NumResults } from "./components/NumResults";
import { MovieList } from "./components/MovieList";
import { WatchedList } from "./components/WatchedList";
import { WatchedSummary } from "./components/WatchedSummary";
import { StarRating } from "./components/StarRating";

import "./index.css";

import { tempMovieData, tempWatchedData } from "./mock/moviesData";
import { Box } from "./components/Box";

export function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      {/* <NavBar>
        <SearchBar />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} /> 
        </Box>
      </Main> */}
      <StarRating maxRating={10} />
    </>
  );
}
