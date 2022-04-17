import React from 'react';
import { Header } from '../Header';

interface PageLayoutProps {
  children?: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <React.Fragment>
      <Header>Movie Magic</Header>
      {children}
    </React.Fragment>
  );
}
