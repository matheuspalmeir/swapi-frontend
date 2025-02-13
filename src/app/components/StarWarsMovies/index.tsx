"use client";
import Button from "../Button";
import { TStarWarsMovie, TStarWarsMovies } from "@/app/types";

type StarWarsMoviesProps = {
  data?: TStarWarsMovies;
  onClickDetails: (person: TStarWarsMovie) => void;
};

export default function StartWarsMovies({
  onClickDetails,
  data,
}: StarWarsMoviesProps) {
  return (
    <>
      {data?.map((movie, index) => (
        <div
          key={`${movie.title}-${index}`}
          className="flex flex-row flex-1 flex-nowrap justify-between border-b-2 border-gray-300 p-2"
        >
          <h1 className="font-bold">{movie.title}</h1>
          <Button onClick={() => onClickDetails(movie)} className="w-40">
            See Details
          </Button>
        </div>
      ))}
    </>
  );
}
