import React from 'react';
import { Header } from '../Header';

export const PageLayout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Header>Movie Magic</Header>
      {children}
    </React.Fragment>
  );
};
