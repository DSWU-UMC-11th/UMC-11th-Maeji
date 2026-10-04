export default function Pagination() {
  return (
    <nav className="pagination" aria-label="페이지">
      {[1, 2, 3, 4, 5].map((page) => (
        <span
          key={page}
          className={page === 1 ? "page-number active" : "page-number"}
          aria-current={page === 1 ? "page" : undefined}
        >
          {page}
        </span>
      ))}
    </nav>
  );
}