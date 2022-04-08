import express from 'express';
import { moviesRouter } from './moviesRouter';
import { planMembersRouter } from './planMembersRouter';

export const rootRouter = express.Router();
rootRouter.use('/top-10-movies', moviesRouter);
rootRouter.use('/plan-members', planMembersRouter);
