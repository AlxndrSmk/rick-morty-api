type EmptySearchResultsProps = {
  searchName: string;
};

export function EmptySearchResults({ searchName }: EmptySearchResultsProps) {
  const trimmed = searchName.trim();
  const message = trimmed
    ? `No characters matched “${trimmed}”. Try a different name.`
    : "No characters found for this page.";

  return (
    <p
      className="rounded-lg border border-slate-200 bg-white px-4 py-8 text-center text-slate-600"
      role="status"
    >
      {message}
    </p>
  );
}
