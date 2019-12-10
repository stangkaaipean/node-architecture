import log4js from 'log4js';
import { errorResponse } from '../../utils/error';
import { messageResponse } from '../../utils/response';
const logger = log4js.getLogger('users-use-cases');

export function makeCreateUser(UserModel) {
  return async function createUser(user) {
    // business logic
    let result;
    try {
      
      const isExists = await UserModel.isUserExists(user.username, user.email);
      
      if (isExists) {
        result = messageResponse(undefined, 'The user already exists.');
      } else {
        await UserModel.create(user).then((res) => {
          result = messageResponse(res, 'Created the new user sucessfully.');
        });
      }

    } catch (err) {
      throw err;
    }

    // business logic
    return result;
  }
}
