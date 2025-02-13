"use server";

import { TStarWarsMoviesResponse, TStarWarsPeopleResponse } from "../types";
import { SWAPI } from "../util/requests";

export const getPeople = async (
  name: string
): Promise<TStarWarsPeopleResponse> => {
  const response = await fetch(SWAPI.GET_PEOPLE_BY_NAME + name);
  const data = await response.json();
  return data;
};

export const getMovies = async (
  title: string
): Promise<TStarWarsMoviesResponse> => {
  const response = await fetch(SWAPI.GET_MOVIES_BY_TITLE + title);
  const data = await response.json();
  return data;
};
