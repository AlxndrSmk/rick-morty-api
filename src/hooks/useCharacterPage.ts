import { useCallback, useEffect, useRef, useState } from "react";
import { fetchCharacterPage } from "../api/fetchCharacterPage";
import type { RickAndMortyCharacterPage } from "../types/rickAndMorty";
import { useDebouncedValue } from "./useDebouncedValue";

const SEARCH_DEBOUNCE_MS = 400;

type FetchState =
  | { status: "loading" }
  | { status: "success"; data: RickAndMortyCharacterPage }
  | { status: "error"; message: string };

export function useCharacterPage() {
  const [searchInput, setSearchInput] = useState("");
  const debouncedName = useDebouncedValue(searchInput, SEARCH_DEBOUNCE_MS);
  const [page, setPage] = useState(1);
  const [retryToken, setRetryToken] = useState(0);
  const [state, setState] = useState<FetchState>({ status: "loading" });

  const prevDebouncedNameRef = useRef(debouncedName);

  const goToPage = useCallback((nextPage: number) => {
    setPage(nextPage);
  }, []);

  const retry = useCallback(() => {
    setRetryToken((token) => token + 1);
  }, []);

  useEffect(() => {
    const searchChanged = prevDebouncedNameRef.current !== debouncedName;
    prevDebouncedNameRef.current = debouncedName;
    const effectivePage = searchChanged ? 1 : page;

    if (searchChanged && page !== 1) {
      setPage(1);
    }

    const controller = new AbortController();
    setState({ status: "loading" });

    void (async () => {
      try {
        const data = await fetchCharacterPage(effectivePage, {
          name: debouncedName,
          signal: controller.signal,
        });
        setState({ status: "success", data });
      } catch (unknownError) {
        if (unknownError instanceof DOMException && unknownError.name === "AbortError") {
          return;
        }
        const message =
          unknownError instanceof Error ? unknownError.message : "Something went wrong";
        setState({ status: "error", message });
      }
    })();

    return () => {
      controller.abort();
    };
  }, [page, debouncedName, retryToken]);

  return {
    searchInput,
    setSearchInput,
    debouncedName,
    page,
    state,
    goToPage,
    retry,
  };
}
