import * as UserModel from '../models/users.model'
import { makeCreateUser } from './users.use-case'

let createUser = makeCreateUser(UserModel);

export { createUser };