import { ListBox } from "./ListBox";
import { WatchedBox } from "./WatchedBox";

export function Main({ movies, watched }) {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox watched={watched} />
    </main>
  );
}
