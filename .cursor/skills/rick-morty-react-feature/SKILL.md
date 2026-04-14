---
name: rick-morty-react-feature
description: >-
  Builds a React UI that fetches and lists Rick and Morty characters from
  rickandmortyapi.com in a responsive grid with image, name, status, and species,
  following this repo’s React and UX rules. Use when adding or changing character
  listing, search, or pagination; integrating the Rick and Morty API; or when
  the user mentions rickandmortyapi, character cards, or this project’s grid UI.
---

# Rick and Morty characters (React)

## API

- **Base URL:** `https://rickandmortyapi.com/api/character`
- **Query params:** `page` (pagination), `name` (filter; optional)
- **Build requests with** `URLSearchParams` (avoid hand-rolled query strings).
- **Empty filter results:** the API may respond with **404** and a JSON body containing `"error"`. Treat that as **zero results** (empty `results` array + synthetic `info`), not as a fatal app error—unless the product should surface “no matches” differently.

## UI requirements (this project)

Deliver a **responsive grid** of character cards. Each card must show:

| Field    | Source (typical)     | Notes                                      |
|----------|----------------------|--------------------------------------------|
| Image    | `character.image`    | Lazy-load (see project rules below).       |
| Name     | `character.name`     | Card title / heading.                      |
| Status   | `character.status`   | e.g. Alive / Dead / unknown—style by value |
| Species  | `character.species`  | Shown next to status if design calls for it |

Optional but common in this codebase: **last known location** from `character.location.name` when the type includes `location`.

## Project rules (must follow)

1. **Functional components + hooks only** — no class components. Use hooks for data loading, debounced search, and pagination state.
2. **TailwindCSS** — styles only via `className` on elements; **no** per-feature CSS files (global Tailwind entry like `index.css` with `@tailwind` layers is allowed).
3. **Errors** — wrap feature trees in an error boundary (e.g. `react-error-boundary`). Every **async** fetch must handle failure (try/catch or equivalent) and show a recoverable UI (message + retry). Do not rely on boundaries alone for network errors.
4. **Loading** — while fetching, show a **skeleton** or **spinner**; do not leave the grid blank with no feedback.
5. **Images** — use `loading="lazy"` and `decoding="async"` on `<img>`; provide descriptive **`alt`** text (e.g. include name and species).
6. **Component size** — keep each file **≤ ~150 lines**; split cards, skeletons, pagination, and search into focused components.
7. **Naming** — use clear names for hooks (`useCharacterPage`, `useDebouncedValue`), API helpers (`fetchCharacterPage`), and UI pieces (`CharacterCard`, `AsyncFetchErrorPanel`).
8. **Accessibility** — semantic regions (`header`, `main`, `nav`, `article`, `section` as appropriate), labels for inputs, `aria-label` / `aria-live` on loading and error regions where it helps.

## Implementation checklist

- [ ] Typed response models (`Character`, paginated `info` + `results`) in a `types` module.
- [ ] Fetch module that accepts `{ page, name?, signal? }` and uses `fetch` + `AbortController` from the hook/effect layer to avoid race conditions.
- [ ] Hook(s) that expose loading, success, error, retry, and pagination; debounce **~400ms** for `name` if the UI has search.
- [ ] Grid: mobile-first Tailwind (`grid`, `gap-*`, responsive `grid-cols-*`).
- [ ] Empty state when `results.length === 0` (search or page with no rows).
- [ ] Run **build** and **lint** after changes.

## Anti-patterns

- Class-based error boundaries in app code (prefer a small boundary component using `react-error-boundary` or the project’s existing pattern).
- Ignoring 404 “no data” responses for filtered lists.
- Fetching on every keystroke without debouncing when using the `name` filter.
- Omitting `alt` on character images or using generic text like “character”.
