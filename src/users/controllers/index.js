import * as userUseCases from '../use-cases'
import { makeCreateUserController } from './users.controller'

let createUserController = makeCreateUserController(userUseCases);

export { createUserController };