import { useState } from "react";
import MovieCard from "./MovieCard";

import movies from "../data/movies.json";

const Main = () => {
  const [moviesState, setMoviesState] = useState(movies);

  const deleteMovie = (id) => {
    const arr = moviesState.filter((movie) => {
      return movie.id !== id;
    });
    setMoviesState(arr);
  };

  let title = () => {
    if (moviesState.length >= 1) {
      return <h2>Sorry! No Movies!</h2>;
    } else if (moviesState.length <= 1) {
      return <h2>Our Special Movie:</h2>;
    } else {
      return <h2>Our Movies:</h2>;
    }
  };

  return (
    <main className="Main py-8">
      {title}
      {moviesState.map((movie) => {
        return (
          <MovieCard key={movie.id} deleteHandler={deleteMovie} movie={movie} />
        );
      })}
    </main>
  );
};

export default Main;
