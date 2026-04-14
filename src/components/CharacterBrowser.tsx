import { AsyncFetchErrorPanel } from "./AsyncFetchErrorPanel";
import { CharacterCard } from "./CharacterCard";
import { CharacterGridSkeleton } from "./CharacterGridSkeleton";
import { CharacterSearchField } from "./CharacterSearchField";
import { EmptySearchResults } from "./EmptySearchResults";
import { PaginationControls } from "./PaginationControls";
import { useCharacterPage } from "../hooks/useCharacterPage";

const SEARCH_FIELD_ID = "character-name-search";

export function CharacterBrowser() {
  const { searchInput, setSearchInput, debouncedName, page, state, goToPage, retry } =
    useCharacterPage();

  return (
    <>
      <CharacterSearchField
        id={SEARCH_FIELD_ID}
        value={searchInput}
        onChange={setSearchInput}
      />

      {state.status === "loading" && <CharacterGridSkeleton />}

      {state.status === "error" && (
        <AsyncFetchErrorPanel message={state.message} onRetry={retry} />
      )}

      {state.status === "success" && state.data.results.length === 0 && (
        <EmptySearchResults searchName={debouncedName} />
      )}

      {state.status === "success" && state.data.results.length > 0 && (
        <>
          <ul
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            aria-label="Rick and Morty characters"
          >
            {state.data.results.map((character) => (
              <li key={character.id}>
                <CharacterCard character={character} />
              </li>
            ))}
          </ul>
          <PaginationControls
            currentPage={page}
            totalPages={state.data.info.pages}
            onPrevious={() => goToPage(Math.max(1, page - 1))}
            onNext={() => goToPage(Math.min(state.data.info.pages, page + 1))}
          />
        </>
      )}
    </>
  );
}
