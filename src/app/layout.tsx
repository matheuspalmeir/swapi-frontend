import type { Metadata } from "next";

import Header from "./components/Header";
import QueryProvider from "./components/QueryProvider/index.";

import "./globals.css";
import { StarWarsProvider } from "./context/StarWarsContext";

export const metadata: Metadata = {
  title: "Star Wars Movies & People",
  description: "Star Wars Movies & People",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <QueryProvider>
          <StarWarsProvider>
            <Header />
            <div className="min-h-screen min-w-screen bg-gray-200 p-12">
              <main className="lawnstarter-theme">{children}</main>
            </div>
          </StarWarsProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
