"use client";
import { useCallback, useEffect, useState } from "react";
import { getMovies, getPeople } from "../actions";
import { useMutation } from "@tanstack/react-query";
import { TStarWarsMovies, TStarWarsPeople } from "../types";

const peoplePlaceHolder = "e.g Chewbacca, Yoda, Boba Fett";
const moviesPlaceHolder =
  "e.g A New Hope, The Empire Strikes Back, Return of the Jedi";

export function useSWSearch() {
  const [placeHolder, setPlaceHolder] = useState<string>(peoplePlaceHolder);
  const [disabledSearch, setDisabledSearch] = useState<boolean>(true);
  const [inputSearchValue, setInputSearchValue] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("People");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [people, setPeople] = useState<TStarWarsPeople>([]);
  const [movies, setMovies] = useState<TStarWarsMovies>([]);

  const { mutate: peopleMutate, data } = useMutation({
    mutationFn: (query: string) => getPeople(query),
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: (peopleFetched) => {
      setPeople(peopleFetched.results); // Confirm data structure
      setIsLoading(false);
      setDisabledSearch(false);
    },
  });

  const { mutate: moviesMutate } = useMutation({
    mutationFn: (query: string) => getMovies(query),
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: (moviesFetched) => {
      setMovies(moviesFetched.results); // Confirm data structure
      setIsLoading(false);
      setDisabledSearch(false);
    },
  });

  const handleRadioInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    value === "People"
      ? setPlaceHolder(peoplePlaceHolder)
      : setPlaceHolder(moviesPlaceHolder);
    setSearchType(value);
  };

  const handleSearchButtonClick = () => {
    if (searchType === "People") {
      peopleMutate(inputSearchValue);
      if (data) setPeople(data.results);
    } else {
      moviesMutate(inputSearchValue);
    }
  };

  const handleOnChangeSearchInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDisabledSearch(false);
    setInputSearchValue(event.target.value);
  };

  return {
    isLoading,
    people,
    movies,
    placeHolder,
    disabledSearch,
    inputSearchValue,
    searchType,
    handleRadioInputChange,
    handleSearchButtonClick,
    handleOnChangeSearchInput,
  };
}
