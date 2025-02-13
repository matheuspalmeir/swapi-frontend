"use client";
import Link from "next/link";
import { TStarWarsPerson } from "../types";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { useStarWars } from "../context/StarWarsContext";
import { useRouter, useSearchParams } from "next/navigation";

export default function CharacterDetails() {
  const { people } = useStarWars();
  const searchParams = useSearchParams();
  const [character, setCharacter] = useState<TStarWarsPerson | null>(null);
  const replace = useRouter();

  useEffect(() => {
    const query = searchParams.get("name") || "";

    if (people && query) {
      const character = people?.find((person) => person.name === query);

      setCharacter(character || null);
    }
  }, [searchParams, people]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md border">
      <h2 className="text-xl font-bold mb-10">{character?.name}</h2>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold mb-2">Details</h3>
          <hr className="border-gray-300 mb-2" />
          <p>
            <strong>Birth Year:</strong> {character?.birth_year}
          </p>
          <p>
            <strong>Gender:</strong>
            {character?.gender}
          </p>
          <p>
            <strong>Eye Color:</strong>
            {character?.eye_color}
          </p>
          <p>
            <strong>Hair Color:</strong>
            {character?.hair_color}
          </p>
          <p>
            <strong>Height:</strong>
            {character?.height}
          </p>
          <p>
            <strong>Mass:</strong> {character?.mass}
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Movies</h3>
          <hr className="border-gray-300 mb-2" />
          <ul>
            <li>
              {character?.films.map((film: string) => {
                const filmId = film.split("/films/")[1].replace("/", "");
                return (
                  <Link
                    className="p-2 text-green-800 hover:underline"
                    href={`/movies/?id=${filmId}`}
                    key={`film-id-${filmId}`}
                  >
                    Film: {filmId}
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
