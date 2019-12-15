import { createUserController } from './controllers/users.controller'
import { Router } from 'express';
import { validUserBodyNeeded } from './middlewares/users.middlewares';
const usersRouter = Router();

usersRouter.post('/', [validUserBodyNeeded, createUserController]);

export { usersRouter };
