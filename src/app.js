import express from 'express'
import { config } from './config/config';
import { usersRouter } from './users/users.routes';
import './config/log.config'
import { connectDb } from './db/connect-db';
import cors from 'cors';
import { HealthChecker, LivenessEndpoint, ReadinessEndpoint} from '@cloudnative/health-connect';
import log4js from 'log4js';
import { authRouter } from './authentication/auth.routes';

(async () => {

  const healthChecker = new HealthChecker();
  const app = express();
  const db = await connectDb();
  const logger = log4js.getLogger('app');

  app.use(cors());
  app.use(express.json());
  app.use('/', authRouter);
  app.use('/users', usersRouter);
  app.use('/live', LivenessEndpoint(healthChecker));
  app.use('/ready', ReadinessEndpoint(healthChecker));

  app.listen(config.port, (err) => {
    if (err) {
      logger.error(`Server is down with cause: ${err}`);
    }
    logger.info(`Server is up on: ${config.port}`);
  });
})();


