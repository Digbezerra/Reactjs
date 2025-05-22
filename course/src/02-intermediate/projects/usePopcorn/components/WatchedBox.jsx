import { useState } from "react";

import { Button } from "./Button";
import { WatchedSummary } from "./WatchedSummary";
import { List } from "./List";
import { MovieItemRating } from "./MovieItemRating";

export function WatchedBox({ watched }) {
  const [isOpen2, setIsOpen2] = useState(true);
  return (
    <div className="box">
      <Button onClick={setIsOpen2}>{isOpen2 ? "–" : "+"}</Button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <List>
            {watched.map((movie) => (
              <MovieItemRating movie={movie} />
            ))}
          </List>
        </>
      )}
    </div>
  );
}
