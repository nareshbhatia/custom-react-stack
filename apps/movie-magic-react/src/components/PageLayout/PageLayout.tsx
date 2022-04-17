import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

interface PageLayoutProps {
  children?: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <React.Fragment>
      <Header>{children}</Header>
      <Outlet />
    </React.Fragment>
  );
}
