const SKELETON_CARD_COUNT = 8;

function SkeletonCard() {
  return (
    <article
      className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
      aria-hidden
    >
      <div className="aspect-square w-full animate-pulse bg-slate-200" />
      <div className="space-y-2 p-4">
        <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
        <div className="h-3 w-1/2 animate-pulse rounded bg-slate-200" />
        <div className="mt-4 border-t border-slate-100 pt-3">
          <div className="h-2 w-24 animate-pulse rounded bg-slate-200" />
          <div className="mt-2 h-3 w-full animate-pulse rounded bg-slate-200" />
        </div>
      </div>
    </article>
  );
}

export function CharacterGridSkeleton() {
  return (
    <div role="status" aria-live="polite" aria-busy="true">
      <ul
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        aria-label="Loading characters"
      >
        {Array.from({ length: SKELETON_CARD_COUNT }, (_, index) => (
          <li key={index}>
            <SkeletonCard />
          </li>
        ))}
      </ul>
    </div>
  );
}
