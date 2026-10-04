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


// import type { Movie } from "../types/movie";

// interface MovieCardProps {
//   movie: Movie;
//   onToggleBookmark: (id: number) => void;
// }

// export default function MovieCard({
//   movie,
//   onToggleBookmark,
// }: MovieCardProps) {
//   return (
//     <article className="movie-card">
//       <div className="poster-wrapper">
//         <img
//           className="movie-poster"
//           src={movie.posterPath}
//           alt={`${movie.title} 포스터`}
//         />

//         <button
//           className="bookmark-button"
//           type="button"
//           aria-label={`${movie.title} ${
//             movie.isBookmarked ? "북마크 해제" : "북마크 추가"
//           }`}
//           aria-pressed={movie.isBookmarked}
//           onClick={() => onToggleBookmark(movie.id)}
//         >
//           <img
//             src={
//               movie.isBookmarked
//                 ? "/icons/bookmark-filled.svg"
//                 : "/icons/bookmark.svg"
//             }
//             alt=""
//           />
//         </button>
//       </div>

//       <h2 className="movie-title">{movie.title}</h2>
//       <p className="movie-date">{movie.releaseDate}</p>
//     </article>
//   );
// }

import { Link } from "@tanstack/react-router";
import type { Movie } from "../../types/movie";
import { cn } from "../../utils/cn";

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
    <article className="min-w-0">
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-[#252525]">
        <Link
          className="block size-full"
          to="/movies/$movieId"
          params={detailParams}
          aria-label={`${movie.title} 상세 보기`}
        >
          <img
            className="block size-full object-cover"
            src={movie.posterPath}
            alt={`${movie.title} 포스터`}
          />
        </Link>

        <button
          className={cn(
            "absolute right-2.5 top-2.5 grid size-9 cursor-pointer place-items-center rounded-full border-0 p-0",
            movie.isBookmarked
              ? "bg-[#f42b45]"
              : "bg-black/65",
          )}
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
            className="size-[22px]"
            src={
              movie.isBookmarked
                ? "/icons/bookmark.svg"
                : "/icons/bookmark-outline.svg"
            }
            alt=""
          />
        </button>
      </div>

      <h2 className="mb-1.5 mt-3 text-base font-bold leading-[1.4]">
        <Link
          className="text-inherit no-underline hover:underline"
          to="/movies/$movieId"
          params={detailParams}
        >
          {movie.title}
        </Link>
      </h2>

      <p className="m-0 text-sm text-[#aaa]">
        {movie.releaseDate}
      </p>
    </article>
  );
}