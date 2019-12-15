import { createErrorResponse } from '../utils/errorUtil';
import * as jwtUtil from '../utils/jwtUtil';

export function signUserToJwt(req, res, next) {
  try {
      req.token = jwtUtil.encode(req.user);
  } catch {
    res.status(500).json(createErrorResponse('logged in unsucessfully'));
  }
  next();
}