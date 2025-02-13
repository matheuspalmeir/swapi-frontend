"use client";
import StartWarsPeople from "../StarWarsPeople";
import StarWarsMovies from "../StarWarsMovies";
import { TStarWarsMovies, TStarWarsPeople } from "@/app/types";

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
  console.log("SearchResults Props:", { searchType, people, movies });

  return (
    <div className="flex flex-col">
      <h1 className="font-bold border-b-2 p-2 border-gray-300">Results</h1>
      {searchType === "People" ? (
        <StartWarsPeople data={people} onClickDetails={() => {}} />
      ) : (
        <StarWarsMovies data={movies} onClickDetails={() => {}} />
      )}
    </div>
  );
}
