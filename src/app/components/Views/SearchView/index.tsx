"use client";

import Card from "../../Card";
import SearchResults from "../../SearchResults";
import StarWarsForm from "../../StarWarsForm";
import { useStarWars } from "@/app/context/StarWarsContext";

export default function SearchView() {
  const { isLoading, people, movies, searchType, error } = useStarWars();
  return (
    <div className="flex flex-row gap-8 row-start-2 items-center sm:items-start w-full">
      <Card>
        <StarWarsForm />
      </Card>
      <Card className="flex-1 justify-center min-h-96">
        {error && <p>Error fetching data</p>}
        {isLoading ? (
          <p>Searching...</p>
        ) : (people && people?.length > 0) || (movies && movies?.length > 0) ? (
          <SearchResults
            searchType={searchType}
            people={people}
            movies={movies}
          />
        ) : (
          !error && (
            <p>
              There are zero matches. Use the form to search for People or
              Movies.
            </p>
          )
        )}
      </Card>
    </div>
  );
}
