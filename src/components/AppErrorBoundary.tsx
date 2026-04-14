import type { ReactNode } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

function AppErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <section
      role="alert"
      aria-live="assertive"
      className="mx-auto max-w-lg rounded-lg border border-red-200 bg-red-50 p-6 text-red-900 shadow-sm"
    >
      <h2 className="text-lg font-semibold">Something broke in the UI</h2>
      <p className="mt-2 text-sm">{error.message}</p>
      <button
        type="button"
        onClick={resetErrorBoundary}
        className="mt-4 rounded-md bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Try again
      </button>
    </section>
  );
}

type AppErrorBoundaryProps = {
  children: ReactNode;
};

export function AppErrorBoundary({ children }: AppErrorBoundaryProps) {
  return (
    <ErrorBoundary FallbackComponent={AppErrorFallback} onReset={() => window.location.reload()}>
      {children}
    </ErrorBoundary>
  );
}
