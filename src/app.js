import express from 'express'
import { config } from './config/config';
import { usersRouter } from './users/routes';
import { connectDb } from './db/connect-db';
import cors from 'cors';
import { HealthChecker, LivenessEndpoint, ReadinessEndpoint} from '@cloudnative/health-connect';

(async () => {

  const healthChecker = new HealthChecker();
  const app = express();
  const db = await connectDb();

  app.use(cors());
  app.use('/users', usersRouter);
  app.use('/live', LivenessEndpoint(healthChecker));
  app.use('/ready', ReadinessEndpoint(healthChecker));

  app.listen(config.port, (err) => {
    console.log(`Server is up on: ${config.port}`);
  });
})();


