import type { ReactElement } from 'react';
import { Movie } from 'movie-models';
import { MovieList } from 'ui-lib';
import { PageLayout } from '../components/Layouts';

interface HomePageProps {
  movies: Array<Movie>;
}

const HomePage = ({ movies }: HomePageProps) => {
  return (
    <div className="p-3">
      <div className="card p-2">
        <h2 className="h5 line-height-none mb-2">Top 10 Movies Of All Time</h2>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export async function getServerSideProps() {
  const API_URL = process.env.API_URL;
  const resMovies = await fetch(`${API_URL}/top-10-movies`);
  const movies = await resMovies.json();

  return {
    props: {
      movies,
    },
  };
}

export default HomePage;
