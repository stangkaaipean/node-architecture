import log4js from 'log4js';
import { createErrorResponse } from '../../utils/errorUtil';
const logger = log4js.getLogger('users-use-cases');

export function validateCreateUserBody(req, res, next) {
  const body = req.body
  if (!body || !body.data || !body.data.user) {
    return res.status(400).json(createErrorResponse('Bad request.'))
  }
  next();
}

export function makeCreateUserController(userUseCases) {
  return function (req, res) {
    const user = req.body.data.user;

    userUseCases.createUser(user).then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      logger.error(`Create the new user: ${user.username}/${user.email} error with cause: ${err}`);
      res.status(500).json(createErrorResponse('Created the new user unsucessfully'));
    });
  }
}