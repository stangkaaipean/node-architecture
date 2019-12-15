import log4js from 'log4js';
import { createErrorResponse } from '../../utils/errorUtil';
import * as userUseCases from '../use-cases/users.use-case'
import { createMessageResponse } from '../../utils/responseUtil';
const logger = log4js.getLogger('users-use-cases');



function makeCreateUserController(userUseCases) {
  return function (req, res) {
    const user = req.body.data.user;

    userUseCases.createUser(user).then((result) => {
      if (!result) {
        return res.status(200).json(createMessageResponse(result, 'The user already exists'));
      }

      return res.status(201).json(createMessageResponse(result, 'Created the new user sucessfully'))

    }).catch((err) => {
      logger.error(`Create the new user: ${user.username}/${user.email} error with cause: ${err}`);
      return res.status(500).json(createErrorResponse(undefined, 'Created the new user unsucessfully'));
    });
  }
}

let createUserController = makeCreateUserController(userUseCases);

export { createUserController };