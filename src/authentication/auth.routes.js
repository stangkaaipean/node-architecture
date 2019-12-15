import { Router } from 'express';
import passport from 'passport';
import { createMessageResponse } from '../utils/responseUtil';
const authRouter = Router();
import { configPassportLocal } from '../config/passport.config';
import { encodeUserNeeded } from './middlewares/auth.middlewares'

configPassportLocal(passport);

authRouter.post('/login',
  passport.authenticate('local', { session: false }),
  encodeUserNeeded,
  (req, res) => {
    res.status(200).json(createMessageResponse({ access_token: req.token }, 'logged in successfully'));
  });

export { authRouter }

