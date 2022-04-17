import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLayout } from './components';
import { HomePage, NotFoundPage, SettingsPage } from './pages';

export function App() {
  return (
    <Routes>
      <Route element={<PageLayout>Movie Magic</PageLayout>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
