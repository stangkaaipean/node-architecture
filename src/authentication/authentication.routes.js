import { Router } from 'express';
import passport from 'passport';
import { createMessageResponse } from '../utils/responseUtil';
const authenticationRouter = Router();
import { configPassportLocal } from '../config/passport.config';
import { signUserToJwt } from '../common/jwt.controller';

configPassportLocal(passport);

authenticationRouter.post('/login', 
passport.authenticate('local', { session: false }), 
signUserToJwt,
(req, res) => {
  res.status(300).json(createMessageResponse({ token: req.token }, 'logged in successfully'));
});

export { authenticationRouter }

