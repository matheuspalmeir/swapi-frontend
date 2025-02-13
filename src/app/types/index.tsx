export type TStarWarsPeople = TStarWarsPerson[];

export type TStarWarsPeopleResponse = {
  count: number;
  next: string;
  previous: string;
  results: TStarWarsPeople;
};

export type TStarWarsPerson = {
  uid?: string;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

export type TStarWarsMoviesResponse = {
  message: string;
  results: TStarWarsMovies;
};

export type TStarWarsMovies = TStarWarsMovie[];

export type TStarWarsMovie = {
  _id?: string;
  uid?: string;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};
