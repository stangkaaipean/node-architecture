import { createUserController } from './controllers'
import { Router } from 'express'
const usersRouter = Router();

usersRouter.post('/', [createUserController]);

export { usersRouter };
