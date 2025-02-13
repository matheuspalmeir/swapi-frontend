"use client";

import { useStarWars } from "@/app/context/StarWarsContext";
import { TStarWarsMovie } from "@/app/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MovieDetailsView() {
  const { movies } = useStarWars();
  const searchParams = useSearchParams();
  const [movie, setCharacter] = useState<TStarWarsMovie | null>(null);

  useEffect(() => {
    const query = searchParams.get("id") || "";
    if (movies && query) {
      const movie = movies?.find(
        (movie) => movie.episode_id.toString() === query
      );
      setCharacter(movie || null);
    }
  }, [searchParams, movie]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md border">
      <h2 className="text-xl font-bold mb-10">{movie?.title}</h2>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold mb-2">Opening Crawl</h3>
          <hr className="border-gray-300 mb-2" />
          <p>{movie?.opening_crawl}</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Characters</h3>
          <hr className="border-gray-300 mb-2" />
          <ul>
            <li>
              {movie?.characters.map((character: string) => {
                const characterId = character
                  .split("/people/")[1]
                  .replace("/", "");
                return (
                  <Link
                    className="p-2 text-green-800 hover:underline"
                    href={`/people/?id=${characterId}`}
                    key={`character-link-${characterId}`}
                  >
                    Character: {characterId}
                  </Link>
                );
              })}
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <Link
          className="bg-primary rounded-full text-white font-bold h-auto p-2 uppercase w-48"
          href={"/"}
        >
          Back to Search
        </Link>
      </div>
    </div>
  );
}
