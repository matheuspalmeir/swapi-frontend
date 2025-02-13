This a Web Application built in Next.js and TailwindCSS that allows user to serach for Characters and Films from the Star Wars Universe.

## Getting Started

If you prefer to run locally, follow these steps:
(Ensure you have the swapi-gateway running locally as well, otherwise jump to the docker initialization).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running with Docker
Running with Docker require you to clone the https://github.com/matheuspalmeir/sw-app repository, which contain the docker compose file to orquestrate the containers. 
After you clone the sw-app repo and also this repo, run the following command to start the application in the /sw-app folder:

```bash
docker compose up --build
```

## Accessing the application

Once the application is up and running, you can access it by opening your web browser and navigating to [http://localhost:3000](http://localhost:3000).
