import { createUserController, validateCreateUserBody } from './controllers'
import { Router } from 'express';
const usersRouter = Router();

usersRouter.post('/', [validateCreateUserBody, createUserController]);

export { usersRouter };
