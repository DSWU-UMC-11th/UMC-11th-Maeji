import { useState } from "react";
import MovieGrid from "../../components/movies/movie-grid";
import Pagination from "../../components/movies/pagination";
import { movies as initialMovies } from "../../data/movies";
import type { Movie } from "../../types/movie";

export function MovieListPage() {
  const [movies, setMovies] =
    useState<Movie[]>(initialMovies);

  function toggleBookmark(id: number) {
    setMovies((previousMovies) =>
      previousMovies.map((movie) =>
        movie.id === id
          ? {
              ...movie,
              isBookmarked: !movie.isBookmarked,
            }
          : movie,
      ),
    );
  }

  return (
    <main className="mx-auto max-w-[1200px] px-6 pb-20 pt-12">
      <h1 className="mb-8 text-[28px] font-bold">
        영화 목록
      </h1>

      <MovieGrid
        movies={movies}
        onToggleBookmark={toggleBookmark}
      />

      <Pagination />
    </main>
  );
}