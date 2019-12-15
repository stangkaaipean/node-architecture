
import jwt from 'jsonwebtoken';
import { config } from '../config/config';

export function encode(payload) {
  return jwt.sign(payload, config.secret, { expiresIn: config.expireIn });
}

export function verify(token) {
  return jwt.verify(token, config.secret);
}
