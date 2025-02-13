"use client";
import { createContext, useContext, ReactNode } from "react";
import { useSWSearch } from "../hooks/useSWSearch";
import { TStarWarsMovies, TStarWarsPeople } from "../types";

type StarWarsContextType = {
  isLoading: boolean;
  people?: TStarWarsPeople;
  movies?: TStarWarsMovies;
  searchType: string;
  placeHolder: string;
  disabledSearch: boolean;
  inputSearchValue: string;
  handleRadioInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchButtonClick: () => void;
  handleOnChangeSearchInput: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

const StarWarsContext = createContext<StarWarsContextType | undefined>(
  undefined
);

export function StarWarsProvider({ children }: { children: ReactNode }) {
  const starWarsState = useSWSearch();

  return (
    <StarWarsContext.Provider value={starWarsState}>
      {children}
    </StarWarsContext.Provider>
  );
}
export function useStarWars() {
  const context = useContext(StarWarsContext);
  if (!context) {
    throw new Error("useStarWars must be used within StarWarsProvider");
  }
  return context;
}
