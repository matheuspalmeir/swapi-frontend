"use client";
import { Suspense } from "react";
import PeopleDetailsView from "../components/Views/PeopleView";

export default function PeoplePage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PeopleDetailsView />
    </Suspense>
  );
}
