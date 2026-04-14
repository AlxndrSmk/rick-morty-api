import type { RickAndMortyCharacter } from "../types/rickAndMorty";
import { characterStatusTextClass } from "./characterStatusTextClass";
import { CharacterPortrait } from "./CharacterPortrait";

type CharacterCardProps = {
  character: RickAndMortyCharacter;
};

export function CharacterCard({ character }: CharacterCardProps) {
  const statusClassName = characterStatusTextClass(character.status);

  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <CharacterPortrait
        imageUrl={character.image}
        characterName={character.name}
        species={character.species}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-900">{character.name}</h3>
        <p className="mt-1 text-sm">
          <span className={`font-medium ${statusClassName}`}>{character.status}</span>
          <span className="text-slate-400" aria-hidden>
            {" "}
            ·{" "}
          </span>
          <span className="text-slate-600">{character.species}</span>
        </p>
        <div className="mt-4 border-t border-slate-100 pt-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Last known location
          </p>
          <p className="mt-1 text-sm text-slate-600">{character.location.name}</p>
        </div>
      </div>
    </article>
  );
}
