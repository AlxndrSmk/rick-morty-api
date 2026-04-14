import type { RickAndMortyCharacterPage } from "../types/rickAndMorty";

const BASE = "https://rickandmortyapi.com/api";

const EMPTY_PAGE: RickAndMortyCharacterPage = {
  info: { count: 0, pages: 0, next: null, prev: null },
  results: [],
};

function isEmptyNotFoundResponse(status: number, body: unknown): boolean {
  return status === 404 && typeof body === "object" && body !== null && "error" in body;
}

export async function fetchCharacterPage(
  page: number,
  options?: { name?: string; signal?: AbortSignal },
): Promise<RickAndMortyCharacterPage> {
  const params = new URLSearchParams();
  params.set("page", String(page));
  const trimmedName = options?.name?.trim();
  if (trimmedName) {
    params.set("name", trimmedName);
  }

  const response = await fetch(`${BASE}/character?${params.toString()}`, {
    signal: options?.signal,
  });

  const body: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    if (isEmptyNotFoundResponse(response.status, body)) {
      return EMPTY_PAGE;
    }
    const message = `Failed to load characters (${response.status})`;
    throw new Error(message);
  }

  return body as RickAndMortyCharacterPage;
}
