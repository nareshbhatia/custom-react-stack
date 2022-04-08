import type { ReactElement } from 'react';
import type { NextPage } from 'next';
import { Movie } from 'movie-models';
import { PageLayout } from '../components/Layouts';

interface HomePageProps {
  movies: Array<Movie>;
}

const HomePage: NextPage = () => {
  return (
    <div className="p-3">
      <div className="card p-2">
        <div>Movies</div>
      </div>
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export async function getServerSideProps() {
  return {
    props: {
      movies: [],
    },
  };
}

export default HomePage;
