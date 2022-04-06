import { MovieListContainer } from './MovieListContainer';

export function HomePage() {
  return (
    <div className="p-3">
      <div className="card p-2">
        <MovieListContainer />
      </div>
    </div>
  );
}
