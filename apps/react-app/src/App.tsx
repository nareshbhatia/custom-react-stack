import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { HomePage, NotFoundPage, SettingsPage } from './pages';

export function App() {
  return (
    <React.Fragment>
      <Header>React App</Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </React.Fragment>
  );
}
