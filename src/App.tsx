import { AppErrorBoundary } from "./components/AppErrorBoundary";
import { CharacterBrowser } from "./components/CharacterBrowser";

export default function App() {
  return (
    <AppErrorBoundary>
      <div className="min-h-screen bg-white">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Rick and Morty — Characters
            </h1>
            <p className="mt-2 max-w-2xl text-slate-600">
              Data from{" "}
              <a
                href="https://rickandmortyapi.com"
                className="font-medium text-emerald-700 underline decoration-emerald-700/30 underline-offset-2 hover:text-emerald-800"
              >
                rickandmortyapi.com
              </a>
              . Search uses the API <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">name</code>{" "}
              filter (debounced).
            </p>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <CharacterBrowser />
        </main>
      </div>
    </AppErrorBoundary>
  );
}
