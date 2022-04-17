import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Movie } from 'movie-models';
import { MovieList } from 'ui-lib';

type HomePageData = {
  movies: Array<Movie>;
};

export let loader: LoaderFunction = async () => {
  const API_URL = process.env.API_URL;
  const resMovies = await fetch(`${API_URL}/top-10-movies`);
  const movies = await resMovies.json();

  let data: HomePageData = {
    movies,
  };

  return json(data);
};

export default function HomePage() {
  const { movies } = useLoaderData<HomePageData>();

  return (
    <div className="p-3">
      <div className="card p-2">
        <h2 className="h5 line-height-none mb-2">Top 10 Movies Of All Time</h2>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
