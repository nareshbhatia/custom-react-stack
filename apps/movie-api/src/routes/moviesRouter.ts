import express from 'express';
import movies from './data/top-10-movies.json';

export const moviesRouter = express.Router();

/** get top 10 movies */
moviesRouter.get('/', (req, res) => {
  res.send(movies);
});
