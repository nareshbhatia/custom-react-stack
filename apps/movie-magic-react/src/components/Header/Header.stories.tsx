import React from 'react';
import { Meta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

// ----- Note -----
// If we were not mixing stacks, then the Router below would go as a decorator
// in .storybook/preview.tsx and will not be needed here.
export const HeaderStory = () => {
  return (
    <Router>
      <Header>Movie Magic</Header>
    </Router>
  );
};
HeaderStory.storyName = 'Header';
