export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="shadow-md p-30 border-2 border-gray-200 min-w-md bg-white rounded-md">
      {children}
    </div>
  );
}
