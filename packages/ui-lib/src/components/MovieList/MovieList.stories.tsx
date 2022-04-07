import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MovieList } from './MovieList';

export default {
  title: 'Components/MovieList',
  component: MovieList,
} as Meta;

const Template: Story = (args) => (
  <div className="card p-2">
    <MovieList movies={args.movies} />
  </div>
);

export const MovieListStory = Template.bind({});
MovieListStory.storyName = 'MovieList';
MovieListStory.args = {
  movies: [
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
  ],
};
