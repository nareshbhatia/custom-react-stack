import { render, screen } from '../../test/test-utils';
import { MovieList } from './MovieList';

const movies = [
  {
    name: 'The Shawshank Redemption',
    year: 1994,
    rating: 9.3,
  },
  {
    name: 'The Godfather',
    year: 1972,
    rating: 9.2,
  },
  {
    name: 'The Godfather: Part II',
    year: 1974,
    rating: 9.0,
  },
];

describe('<MovieList />', () => {
  test('renders correctly', async () => {
    render(<MovieList movies={movies} />);

    // expect 10 movies
    const movieTable = await screen.findByTestId('movie-table');
    const movieRows = movieTable.querySelectorAll('tbody tr');
    expect(movieRows.length).toBe(movies.length);
  });
});
