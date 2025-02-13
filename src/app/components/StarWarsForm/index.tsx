"use client";
import { useStarWars } from "@/app/context/StarWarsContext";
import Button from "../Button";

export default function StarWarsForm() {
  const {
    handleRadioInputChange,
    handleOnChangeSearchInput,
    handleSearchButtonClick,
    placeHolder,
    searchType,
    disabledSearch,
  } = useStarWars();
  return (
    <div className="flex flex-col min-w-100">
      <span className="text-sm font-bold text-gray-900">
        What are you searching for?
      </span>

      <div className="flex flex-1 gap-2 p-4">
        <input
          checked={searchType === "People"}
          type="radio"
          value="People"
          onChange={handleRadioInputChange}
        />
        <label className="text-sm font-bold text-gray-900">People</label>
        <input
          type="radio"
          value="Movies"
          onChange={handleRadioInputChange}
          checked={searchType === "Movies"}
        />
        <label className="text-sm font-bold text-gray-900">Movies</label>
      </div>

      <div className="flex flex-col gap-3">
        <input
          onChange={handleOnChangeSearchInput}
          className="text-sm font-thin text-gray-500 border-2 border-gray-300 rounded-md p-2 w-80"
          type="text"
          placeholder={placeHolder}
        />
        <Button
          disabled={disabledSearch}
          onClick={handleSearchButtonClick}
          className="bg-primary hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full text-center mt-2 w-80"
        >
          Search
        </Button>
      </div>
    </div>
  );
}
