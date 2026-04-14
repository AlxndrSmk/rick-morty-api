export type RickAndMortyCharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: string[];
  location: {
    name: string;
    url: string;
  };
};

export type RickAndMortyCharacterPage = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: RickAndMortyCharacter[];
};
