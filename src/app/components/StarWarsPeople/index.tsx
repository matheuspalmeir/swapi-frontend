"use client";
import Button from "../Button";
import { TStarWarsPeople, TStarWarsPerson } from "@/app/types";

type StarWarsPeopleProps = {
  data?: TStarWarsPeople;
  onClickDetails: (person: TStarWarsPerson) => void;
};

export default function StartWarsPeople({
  data,
  onClickDetails,
}: StarWarsPeopleProps) {
  return (
    <>
      {data?.map((person, index) => (
        <div
          key={`${person.name}-${index}`}
          className="flex flex-row flex-1 flex-nowrap justify-between border-b-2 border-gray-300 p-2"
        >
          <h1 className="font-bold">{person.name}</h1>
          <Button onClick={() => onClickDetails(person)} className="w-40">
            See Details
          </Button>
        </div>
      ))}
    </>
  );
}
