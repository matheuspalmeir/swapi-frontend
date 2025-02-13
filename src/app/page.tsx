import SearchView from "./components/Views/SearchView";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-gray-200 p-12">
      <main className="lawnstarter-theme">
        <SearchView />
      </main>
    </div>
  );
}
