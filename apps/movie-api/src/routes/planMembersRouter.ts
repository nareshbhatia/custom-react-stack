import express from 'express';
import planMembers from './data/plan-members.json';

export const planMembersRouter = express.Router();

planMembersRouter.get('/', (req, res) => {
  res.send(planMembers);
});
