import { createErrorResponse } from '../../utils/errorUtil';
import * as jwtUtil from '../../utils/jwtUtil';

export function encodeUserNeeded(req, res, next) {
  try {
    req.token = jwtUtil.encode(req.user);
  } catch (e) {
    return res.status(500).json(createErrorResponse());
  }
  next();
}

export function validAccessTokenNeeded(req, res, next) {
  if (req.headers['authorization']) {
    try {

      let authorization = req.headers['authorization'].split(' ');
      if (authorization[0] !== 'Bearer') {
        return res.status(401).json(createErrorResponse(undefined, 'Unauthorized'));
      } else {
        req.jwt = jwtUtil.verify(authorization[1]);
        return next();
      }

    } catch (err) {
      return res.status(403).send(createErrorResponse(undefined, 'Forbidden'));
    }
  } else {
    return res.status(401).json(createErrorResponse(undefined, 'Unauthorized'));
  }
  next();
}