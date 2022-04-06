import { Fragment } from 'react';
import { MovieList } from '../../components';
import { useMovies } from './useMovies';

export function MovieListContainer() {
  const { isLoading, isError, error, movies } = useMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <h2 className="h5">{(error as any).message}</h2>;
  }

  return (
    <Fragment>
      <h2 className="h5 line-height-none mb-2">Top 10 Movies Of All Time</h2>
      <MovieList movies={movies} />
    </Fragment>
  );
}
