// import { useState } from 'react'
// import './App.css'

//1 미니실습
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Maeji의 React 학습</h1>
//           <p>
//             Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

//2미니 실습
// export default function App() {
//   const movieTitle = "치이카와";
//   const genre = "애니";
//   const releaseDate = "2026.09.20"

//   return (
//     <article className="movie-card">
//       <h1>{movieTitle}</h1>
//       <p>장르: {genre}</p>
//       <p>개봉알: {releaseDate}</p>
//     </article>
//   );
// }

//3. 미니실습 
// function Header() {
//   return <h1>영화 목록</h1>;
// }

// function MovieCard() {
//   return (
//     <article>
//       <h2>오디세이</h2>
//       <p>2026.08.05</p>
//     </article>
//   );
// }

// function MovieList() {
//   return (
//     <section>
//       <MovieCard />
//       <MovieCard />
//     </section>
//   );
// }

// export default function App() {
//   return (
//     <main>
//       <Header />
//       <MovieList />
//     </main>
//   );
// }

//4. 미니실습

// import MovieCard from "./components/movie-card";
// export default function App(){
//   return(
//     <main>
//       <h1>영화 목록</h1>

//       <MovieCard
//         title="오디세이"
//         releaseDate="2026.08.05"
//         isBookmarked={true}
//       />

//       <MovieCard
//         title="토이 스토리 5"
//         releaseDate="2026.06.17"
//         isBookmarked={false}
//       />

//       <MovieCard
//         title="치이카와"
//         releaseDate="2026.09.30"
//         isBookmarked={true}
//       />

//     </main>
//   );
// }

//5. 미니실습
// interface Movie{
//   id: number;
//   title: string;
//   releaseDate: string;
// }

// const movies: Movie[] =[
//   {
//     id: 1,
//     title: "오디세이",
//     releaseDate: "2026.08.05",
//   },
//   {
//     id: 2,
//     title: "토이 스토리 5",
//     releaseDate: "2026.06.17",
//   },
//   {
//     id: 3,
//     title: "치이카와",
//     releaseDate: "2026.09.30",
//   },
// ];

// export default function App() {
//   return(
//     <main>
//       <h1>영화 목록</h1>

//       {movies.length === 0 ? ( 
//         <p>표시할 영화가 없어요.</p>
//       ) : (
//         <ul>
//           {movies.map((movie) => (
//             <li key={movie.id}>
//               {movie.title} - {movie.releaseDate}
//             </li>
//           ))}
//         </ul>
//       )}
//     </main>
//   );
// }

//6. 미니실습
// import { useState } from "react";
// const MIN_COUNT = 0;
// const MAX_COUNT = 5;

// export default function App() {
//   const [count, setCount] = useState(0);

//   function handleIncrease() {
//     setCount((current)=> current + 1);
//   }

//   function handleDecrease() {
//     setCount((current) => current -1);
//   }

//   function handleReset() {
//     setCount(0);
//   }

//   return (
//     <main>
//       <h1>카운터</h1>
//       <p>현재 값: {count}</p>

//       <button
//         onClick={handleIncrease}
//         disabled={count === MAX_COUNT}
//       >
//         +1
//       </button>

//       <button
//         onClick={handleDecrease}
//         disabled={count === MIN_COUNT}
//       >
//         -1
//       </button>
      
//       <button onClick={handleReset}>
//         초기화
//       </button>
//     </main>
//   );

// }

//7. 실습
// import { useState } from "react";

// interface Movie {
//   id: number;
//   title: string;
//   releaseDate: string;
//   isBookmarked: boolean;
// }

// interface MovieCardProps {
//   movie: Movie;
//   onToggleBookmark: (movieId: number) => void;
// }

// const initialMovies: Movie[] = [
//   {
//     id: 1,
//     title: "오디세이",
//     releaseDate: "2026.08.05",
//     isBookmarked: true,
//   },
//   {
//     id: 2,
//     title: "토이 스토리 5",
//     releaseDate: "2026.06.17",
//     isBookmarked: false,
//   },
// ];

// function MovieCard({
//   movie,
//   onToggleBookmark,
// }: MovieCardProps) {
//   return (
//     <li>
//       <h2>{movie.title}</h2>

//       <p>개봉일: {movie.releaseDate}</p>

//       <button
//         type="button"
//         aria-pressed={movie.isBookmarked}
//         onClick={() => onToggleBookmark(movie.id)}
//       >
//         {movie.isBookmarked ? "북마크 해제" : "북마크 추가"}
//       </button>
//     </li>
//   );
// }

// export default function App() {
//   const [movies, setMovies] = useState(initialMovies);

//   function handleToggleBookmark(movieId: number) {
//     setMovies((currentMovies) =>
//       currentMovies.map((movie) =>
//         movie.id === movieId
//           ? {
//               ...movie,
//               isBookmarked: !movie.isBookmarked,
//             }
//           : movie,
//       ),
//     );
//   }

//   return (
//     <main>
//       <h1>영화 목록</h1>

//       <ul>
//         {movies.map((movie) => (
//           <MovieCard
//             key={movie.id}
//             movie={movie}
//             onToggleBookmark={handleToggleBookmark}
//           />
//         ))}
//       </ul>
//     </main>
//   );
// }

//8. 미니실습
// import {createContext,useContext,useState, } from "react";


// type StudyMode = "focus" | "break";

// const StudyModeContext =
//   createContext<StudyMode>("focus");

// function StudyModeStatus() {
//   const studyMode = useContext(StudyModeContext);

//   return (
//     <section>
//       <h2>현재 학습 모드</h2>

//       <p>
//         {studyMode === "focus"
//           ? "집중 시간입니다."
//           : "휴식 시간입니다."}
//       </p>
//     </section>
//   );
// }

// export default function App() {
//   const [studyMode, setStudyMode] =
//     useState<StudyMode>("focus");

//   function handleToggleStudyMode() {
//     setStudyMode((currentMode) =>
//       currentMode === "focus" ? "break" : "focus",
//     );
//   }

//   return (
//     <StudyModeContext value={studyMode}>
//       <main>
//         <h1>학습 모드</h1>

//         <StudyModeStatus />

//         <button
//           type="button"
//           onClick={handleToggleStudyMode}
//         >
//           모드 바꾸기
//         </button>
//       </main>
//     </StudyModeContext>
//   );
// }



import { useState } from "react";
import Header from "./components/header";
import MovieGrid from "./components/movie-grid";
import Pagination from "./components/pagination";
import { movies as initialMovies } from "./data/movies";
import type { Movie } from "./types/movie";


export default function App() {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);

  function toggleBookmark(id: number) {
    setMovies((previousMovies) =>
      previousMovies.map((movie) =>
        movie.id === id
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie
      )
    );
  }

  return (
    <>
      <Header />

      <main className="main-content">
        <h1 className="page-title">영화 목록</h1>
        <MovieGrid movies={movies} onToggleBookmark={toggleBookmark} />
        <Pagination />
      </main>
    </>
  );
}