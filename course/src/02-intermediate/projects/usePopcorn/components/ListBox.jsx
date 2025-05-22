import { useState } from "react";

import { Button } from "./Button";
import { List } from "./List";
import { MovieItem } from "./MovieItem";

export function ListBox({ movies }) {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <Button onClick={setIsOpen1}>{isOpen1 ? "–" : "+"}</Button>
      {isOpen1 && (
        <List>
          {movies?.map((movie) => (
            <MovieItem movie={movie} />
          ))}
        </List>
      )}
    </div>
  );
}
