import log4js from 'log4js';
const logger = log4js.getLogger('users-use-cases');
import passwordHash from 'password-hash';
import { config } from '../../config/config'
import * as UserModel from '../models/users.model'

export function makeCreateUser(UserModel) {
  return async function createUser(user) {
    try {

      const hashPassword = passwordHash.generate(user.password, { algorithm: config.algo, iterations: config.iterations, saltLength: config.saltLength });
      user.password = hashPassword;

      const isExists = await UserModel.isUserExists(user.username, user.email);

      if (isExists) {
        return;
      }
      
      return await UserModel.create(user);

    } catch (err) {
      throw err;
    }
  }
}


const createUser = makeCreateUser(UserModel);

export { createUser };