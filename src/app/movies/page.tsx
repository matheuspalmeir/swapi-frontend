"use client";
import { Suspense } from "react";
import MoviesDetailsView from "../components/Views/MoviesView";

export default function MoviesPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MoviesDetailsView />
    </Suspense>
  );
}
