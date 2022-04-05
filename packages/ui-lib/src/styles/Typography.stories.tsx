import React from 'react';
import { Meta } from '@storybook/react';

export default {
  title: 'Style Guide/Typography',
} as Meta;

export const TypographyStory = () => (
  <div className="card max-w-800 p-3">
    <h1 className="h1">h1. Heading 1</h1>
    <h2 className="h2 mt-1">h2. Heading 2</h2>
    <h3 className="h3 mt-1">h3. Heading 3</h3>
    <h4 className="h4 mt-1">h4. Heading 4</h4>
    <h5 className="h5 mt-1">h5. Heading 5</h5>
    <h6 className="h6 mt-1">h6. Heading 6</h6>
    <h6 className="h6sm mt-1">h6sm. Heading 6sm</h6>
    <h6 className="h6xs mt-1">h6xs. Heading 6xs</h6>
    <p className="body1 mt-1">
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.
    </p>
    <p className="body2 mt-1">
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.
    </p>
  </div>
);
TypographyStory.storyName = 'Typography';
