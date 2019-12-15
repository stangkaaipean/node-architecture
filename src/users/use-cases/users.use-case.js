import log4js from 'log4js';
import { createMessageResponse } from '../../utils/responseUtil';
const logger = log4js.getLogger('users-use-cases');
import passwordHash from 'password-hash';
import { config } from '../../config/config'

export function makeCreateUser(UserModel) {
  return async function createUser(user) {
    let result;
    try {

      const hashPassword = passwordHash.generate(user.password, { algorithm: config.algo, iterations: config.iterations, saltLength: config.saltLength });
      user.password = hashPassword;

      const isExists = await UserModel.isUserExists(user.username, user.email);

      if (isExists) {
        result = createMessageResponse(undefined, 'The user already exists.');
      } else {
        await UserModel.create(user).then((res) => {
          result = createMessageResponse(res, 'Created the new user sucessfully.');
        });
      }

    } catch (err) {
      throw err;
    }

    return result;
  }
}
