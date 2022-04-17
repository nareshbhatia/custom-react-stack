import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import mainStylesHref from '../../../packages/ui-lib/src/styles/main.css';
import stylesHref from '../styles/styles.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Movie Magic | Remix',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [
    // preload Inter font for performance (font weights 400, 500, 600)
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/inter-v7-latin-regular.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/inter-v7-latin-500.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/inter-v7-latin-600.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },

    // load local styles
    { rel: 'stylesheet', href: mainStylesHref },
    { rel: 'stylesheet', href: stylesHref },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
