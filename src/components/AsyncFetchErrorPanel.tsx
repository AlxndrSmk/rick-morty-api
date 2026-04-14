type AsyncFetchErrorPanelProps = {
  message: string;
  onRetry: () => void;
};

export function AsyncFetchErrorPanel({ message, onRetry }: AsyncFetchErrorPanelProps) {
  return (
    <section
      role="alert"
      aria-live="assertive"
      className="mx-auto max-w-lg rounded-lg border border-amber-200 bg-amber-50 p-6 text-amber-950"
    >
      <h2 className="text-lg font-semibold">Could not load data</h2>
      <p className="mt-2 text-sm">{message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-4 rounded-md bg-amber-800 px-4 py-2 text-sm font-medium text-white hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
      >
        Retry
      </button>
    </section>
  );
}
