"use client";
export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`shadow-md p-6 border-2 border-gray-200 min-w-md bg-white rounded-md max-w-screen max-h-screen ${className}`}
    >
      {children}
    </div>
  );
}
