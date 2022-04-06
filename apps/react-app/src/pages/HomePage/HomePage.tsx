import { useMovies } from './useMovies';
import { Button } from 'ui-lib';

export function HomePage() {
  const { isLoading, isError, error, movies } = useMovies();

  if (isLoading) {
    return <div className="p-3">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="p-3">
        <h2 className="h5">{(error as any).message}</h2>
      </div>
    );
  }

  return (
    <div className="p-3">
      <div className="card p-2">
        <h2 className="h5 line-height-none">Top 10 Movies Of All Time</h2>
        <table data-testid="movie-table" className="mt-2">
          <thead>
            <tr>
              <th className="text-center">Rank</th>
              <th>Name</th>
              <th className="text-center">Year</th>
              <th className="text-center">Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={movie.name}>
                <td className="text-center">{index + 1}</td>
                <td>{movie.name}</td>
                <td className="text-center">{movie.year}</td>
                <td className="text-center">{movie.rating.toFixed(1)}</td>
                <td className="text-center">
                  <Button size="small">Watch</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
