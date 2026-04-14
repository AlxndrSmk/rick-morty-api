type PaginationControlsProps = {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
};

export function PaginationControls({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}: PaginationControlsProps) {
  if (totalPages < 1) {
    return null;
  }

  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  return (
    <nav
      className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6"
      aria-label="Character list pagination"
    >
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstPage}
        className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Previous
      </button>
      <p className="text-sm text-slate-600">
        Page <span className="font-semibold text-slate-900">{currentPage}</span> of{" "}
        <span className="font-semibold text-slate-900">{totalPages}</span>
      </p>
      <button
        type="button"
        onClick={onNext}
        disabled={isLastPage}
        className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Next
      </button>
    </nav>
  );
}
