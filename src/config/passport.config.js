import { Strategy } from 'passport-local';
import * as UserModel from '../users/models/users.model';
import hashPassword from 'password-hash';

export function configPassportLocal(passport) {
  passport.use(new Strategy({
    session: false
  },
    function (username, password, done) {
      UserModel.findUserByUsernameOrEmail(username).then((user) => {
        if (!user || !user.password) return done(null, false);
        if (!hashPassword.verify(password, user.password)) return done(null, false);
        const userResult = user.toObject();
        delete userResult.password;
        return done(null, userResult);
      }).catch((err) => {
        return done(err)
      });
    }
  ));
}
