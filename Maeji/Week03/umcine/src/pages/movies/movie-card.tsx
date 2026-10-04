import { Link } from "@tanstack/react-router";
import type { Movie } from "../../types/movie";

interface MovieCardProps {
  movie: Movie;
  onToggleBookmark: (id: number) => void;
}

export default function MovieCard({
  movie,
  onToggleBookmark,
}: MovieCardProps) {
  const detailParams = {
    movieId: String(movie.id),
  };

  return (
    <article className="movie-card">
      <div className="poster-wrapper">
        <Link
          className="movie-poster-link"
          to="/movies/$movieId"
          params={detailParams}
          aria-label={`${movie.title} 상세 보기`}
        >
          <img
            className="movie-poster"
            src={movie.posterPath}
            alt={`${movie.title} 포스터`}
          />
        </Link>

        <button
          className="bookmark-button"
          type="button"
          aria-label={`${movie.title} ${
            movie.isBookmarked
              ? "북마크 해제"
              : "북마크 추가"
          }`}
          aria-pressed={movie.isBookmarked}
          onClick={() =>
            onToggleBookmark(movie.id)
          }
        >
          <img
            src={
              movie.isBookmarked
                ? "/icons/bookmark.svg"
                : "/icons/bookmark-outline.svg"
            }
            alt=""
          />
        </button>
      </div>

      <h2 className="movie-title">
        <Link
          className="movie-title-link"
          to="/movies/$movieId"
          params={detailParams}
        >
          {movie.title}
        </Link>
      </h2>

      <p className="movie-date">
        {movie.releaseDate}
      </p>
    </article>
  );
}