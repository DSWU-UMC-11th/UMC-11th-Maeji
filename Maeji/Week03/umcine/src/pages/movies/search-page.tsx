import {
  Link,
  useNavigate,
  useSearch,
} from "@tanstack/react-router";
import {
  useState,
  type SubmitEvent,
} from "react";
import { movies } from "../../data/movies";

interface SearchFormProps {
  initialQuery: string;
  onSearch: (query: string) => void;
}

function SearchForm({
  initialQuery,
  onSearch,
}: SearchFormProps) {
  const [searchText, setSearchText] =
    useState(initialQuery);

  function handleSubmit(
    event: SubmitEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    onSearch(searchText.trim());
  }

  return (
    <form
      className="flex gap-3"
      onSubmit={handleSubmit}
    >
      <input
        className="min-w-0 flex-1 rounded-lg border border-[#444] bg-[#1b1b1b] px-4 py-3 text-white outline-none placeholder:text-[#777] focus:border-[#f42b45]"
        aria-label="검색어"
        placeholder="영화 제목을 입력하세요"
        value={searchText}
        onChange={(event) =>
          setSearchText(event.target.value)
        }
      />

      <button
        className="shrink-0 rounded-lg bg-[#f42b45] px-6 py-3 font-bold text-white transition-colors hover:bg-[#d9233b]"
        type="submit"
      >
        검색
      </button>
    </form>
  );
}

export function SearchPage() {
  const { query } = useSearch({
    from: "/search",
  });

  const navigate = useNavigate({
    from: "/search",
  });

  const normalizedQuery =
    query?.trim().toLowerCase() ?? "";

  const searchResults = normalizedQuery
    ? movies.filter(
        (movie) =>
          movie.title
            .toLowerCase()
            .includes(normalizedQuery) ||
          movie.originalTitle
            .toLowerCase()
            .includes(normalizedQuery),
      )
    : [];

  function handleSearch(nextQuery: string) {
    navigate({
      search: nextQuery
        ? { query: nextQuery }
        : {},
    });
  }

  return (
    <main className="mx-auto min-h-[calc(100dvh-72px)] max-w-[1200px] px-6 py-12">
      <h1 className="mb-8 text-[28px] font-bold">
        영화 검색
      </h1>

      <SearchForm
        key={query ?? ""}
        initialQuery={query ?? ""}
        onSearch={handleSearch}
      />

      {!normalizedQuery ? (
        <p className="py-20 text-center text-[#aaa]">
          검색어를 입력해 주세요.
        </p>
      ) : (
        <section className="mt-10">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              ‘{query}’ 검색 결과
            </h2>

            <p className="mt-2 text-[#aaa]">
              영화 {searchResults.length}편
            </p>
          </div>

          {searchResults.length === 0 ? (
            <p className="py-20 text-center text-[#aaa]">
              검색 결과가 없어요.
            </p>
          ) : (
            <ul className="grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
              {searchResults.map((movie) => (
                <li
                  className="overflow-hidden rounded-xl bg-[#1b1b1b]"
                  key={movie.id}
                >
                  <img
                    className="aspect-[2/3] w-full object-cover"
                    src={movie.posterPath}
                    alt={`${movie.title} 포스터`}
                    loading="lazy"
                  />

                  <div className="p-5">
                    <h3 className="text-xl font-bold">
                      {movie.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#aaa]">
                      {movie.originalTitle}
                    </p>

                    <p className="mt-3 text-sm text-[#aaa]">
                      {movie.releaseDate}
                    </p>

                    <p className="mt-4 leading-7 text-[#ddd]">
                      {movie.overview}
                    </p>

                    <Link
                      className="mt-5 inline-flex rounded-lg bg-[#f42b45] px-4 py-2 font-bold text-white no-underline hover:bg-[#d9233b]"
                      to="/movies/$movieId"
                      params={{
                        movieId: String(movie.id),
                      }}
                    >
                      상세 보기
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </main>
  );
}