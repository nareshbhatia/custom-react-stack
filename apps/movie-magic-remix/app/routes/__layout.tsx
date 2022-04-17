import React from 'react';
import { Outlet } from '@remix-run/react';
import { Header } from '../components';

export default function Layout() {
  return (
    <React.Fragment>
      <Header>Movie Magic</Header>
      <Outlet />
    </React.Fragment>
  );
}
