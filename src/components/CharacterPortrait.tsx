type CharacterPortraitProps = {
  imageUrl: string;
  characterName: string;
  species: string;
};

export function CharacterPortrait({ imageUrl, characterName, species }: CharacterPortraitProps) {
  const altText = `Portrait of ${characterName}, ${species}`;

  return (
    <div className="aspect-square w-full overflow-hidden bg-slate-100">
      <img
        src={imageUrl}
        alt={altText}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
        width={300}
        height={300}
      />
    </div>
  );
}
