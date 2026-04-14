type CharacterSearchFieldProps = {
  id: string;
  value: string;
  onChange: (nextValue: string) => void;
};

export function CharacterSearchField({ id, value, onChange }: CharacterSearchFieldProps) {
  return (
    <div className="mb-8">
      <label htmlFor={id} className="sr-only">
        Search characters by name
      </label>
      <input
        id={id}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by name…"
        autoComplete="off"
        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
      />
    </div>
  );
}
