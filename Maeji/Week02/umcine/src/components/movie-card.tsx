//4. 미니실습
// interface MovieCardProps {
//     title: string;
//     releaseDate: string;
//     isBookmarked: boolean;
// }

// export default function MovieCard({
//     title,
//     releaseDate,
//     isBookmarked,
// }: MovieCardProps){
//     return (
//         <article>
//             <h2>{title}</h2>
//             <p>개봉일: {releaseDate}</p>
//             <p>{isBookmarked ? "북마크됨":"북마크 안 됨"}</p>
//         </article>
//     );
// }


import type { Movie } from "../types/movie";

interface MovieCardProps {
  movie: Movie;
  onToggleBookmark: (id: number) => void;
}

export default function MovieCard({
  movie,
  onToggleBookmark,
}: MovieCardProps) {
  return (
    <article className="movie-card">
      <div className="poster-wrapper">
        <img
          className="movie-poster"
          src={movie.posterPath}
          alt={`${movie.title} 포스터`}
        />

        <button
          className="bookmark-button"
          type="button"
          aria-label={`${movie.title} ${
            movie.isBookmarked ? "북마크 해제" : "북마크 추가"
          }`}
          aria-pressed={movie.isBookmarked}
          onClick={() => onToggleBookmark(movie.id)}
        >
          <img
            src={
              movie.isBookmarked
                ? "/icons/bookmark-filled.svg"
                : "/icons/bookmark.svg"
            }
            alt=""
          />
        </button>
      </div>

      <h2 className="movie-title">{movie.title}</h2>
      <p className="movie-date">{movie.releaseDate}</p>
    </article>
  );
}