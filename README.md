# Custom React Stack

React has a very rich ecosystem. For anything you want to do, there is probably
a library or a framework available for it. That's great, but having too many
options can also be very confusing. Do you want to start out simple or go for
the ultimate because your app demands it? What's the right set of options for
your specific use case?

This guide will help you build your own custom React stack, explaining key
options and tradeoffs at each step.

Another advantage of this approach is that you will know exactly what's in your
stack. When that new shiny technology comes along, you will be in a better
position to slot it in.

## Movie Magic - Our Sample App

For the purpose of this exercise, imagine that you want to write a movie
streaming app - _Movie Magic_. The app should present the available movie titles
and help users make a choice. They should also be able to manage their
subscription.

Here's a very humble beginning, just two screens:

1. A Home page showing a list of top 10 movies:

![Home Page](assets/home-page.png)

2. A Settings page for users to manage their subscription:

![Settings Page](assets/settings-page.png)

Click [here](https://custom-react-stack.vercel.app/) to test drive the final
application. As you can tell, it doesn't do much yet. However, this is good
enough for the purpose of our discussion.

## Development Build

```bash
npm install
npm run dev
```

Open browser windows at each of the following URLs to see the respective demo
apps:

1. http://localhost:3000/: Movie Magic | React
2. http://localhost:3001/: Movie Magic | Next.js
3. http://localhost:3002/: Movie Magic | Remix

Note that the React app fetches mock data from MSW, whereas the other two apps
fetch real data from the movie-magic-api.

> Note: Do not run `npm install` in any of the subdirectories. It will break the
> build. There should be only one `package-lock.json` file in the entire repo
> (at the root).

## Production Build

To build all apps and packages, run the following command:

```bash
npm install
npm run build
```

## Clean Build

Removes all build artifacts and performs a clean build.

```bash
npm run clean
npm install
npm run dev
```

For an "aggressive" clean build, add one more step as shown below. This wil
build the lock file from scratch.

```bash
npm run clean
rm package-lock.json
npm install
npm run dev
```

## Running Storybook

```bash
cd storybook
npm install
npm run storybook  # you can also run it from the root directory
```

## Running Unit Tests

```bash
npm run test
```

## Running End-to-End Tests

```sh
npm run dev # starts a local server hosting the react app

# run cypress in a different shell
npm run cypress
```

## Code Formatting

```sh
npm run format
```
