"use client";
import StartWarsPeople from "../StarWarsPeople";
import StarWarsMovies from "../StarWarsMovies";
import {
  TStarWarsMovie,
  TStarWarsMovies,
  TStarWarsPeople,
  TStarWarsPerson,
} from "@/app/types";
import { useRouter } from "next/navigation";

type TSearchResultsProps = {
  searchType: string;
  people?: TStarWarsPeople;
  movies?: TStarWarsMovies;
};

export default function SearchResults({
  searchType,
  people,
  movies,
}: TSearchResultsProps) {
  const { replace } = useRouter();

  const handleOnClickDetailsPerson = (person: TStarWarsPerson) => {
    replace(`/people?name=${person.name}`);
  };

  const handleOnClickDetailsMovie = (movie: TStarWarsMovie) => {
    replace(`/movies?id=${movie.episode_id}`);
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-bold border-b-2 p-2 border-gray-300">Results</h1>
      {searchType === "People" ? (
        <StartWarsPeople
          data={people}
          onClickDetails={handleOnClickDetailsPerson}
        />
      ) : (
        <StarWarsMovies
          data={movies}
          onClickDetails={handleOnClickDetailsMovie}
        />
      )}
    </div>
  );
}
