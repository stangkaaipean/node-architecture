import * as userUseCases from '../use-cases'
import { makeCreateUserController, validateCreateUserBody } from './users.controller'

let createUserController = makeCreateUserController(userUseCases);

export { createUserController, validateCreateUserBody };