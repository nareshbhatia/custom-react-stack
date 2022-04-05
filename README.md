# Flexible React Starter

This is a React starter repo with minimal opinions. We all know how fast the
front-end landscape is changing. So instead of locking you into a specific
stack, this guide shows you what options are available at each step and how to
create a custom stack with your preferred options.

Another advantage of this approach is that you know exactly how your stack is
built. When that new shiny technology comes along, you are in a better position
to slot it in!

## Development Build

```bash
npm install
npm run dev
```

Open browser windows at each of the following URLs to see the respective demo
apps:

1. http://localhost:3000/: React demo
2. http://localhost:3001/: Next.js demo
3. http://localhost:3001/: Remix demo

> Note: Do not run `npm install` in any of the subdirectories. It will break the
> build. There should be only one `package-lock.json` file in the entire repo
> (at the root).

## Production Build

To build all apps and packages, run the following command:

```bash
npm install
npm run build
```

## Running Storybook

```bash
cd storybook
npm install
npm run storybook  # you can also run it from the root directory
```

## TODO

- Update dependencies on `@storybook/react` from `next` to the latest version
  when
  [this Storybook issue](https://github.com/storybookjs/storybook/issues/17831)
  is fixed (add support for React 18).
