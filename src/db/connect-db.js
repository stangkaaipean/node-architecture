import mongoose from 'mongoose';
import { config } from '../config/config'
import log4js from 'log4js';

const logger = log4js.getLogger('mongoose');
const dbUrl = `${config.dbUrl}:${config.dbPort}`;

async function connectDb() {
  if (mongoose.connection.readyState === mongoose.STATES.disconnected) {
    await mongoose.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true });
  }
  return mongoose;
}

mongoose.connection.on('connected', () => {
  logger.info(`Mongoose connected to: ${dbUrl}`)
});

mongoose.connection.once('error', (err) => {
  logger.error(`Mongoose default connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  logger.info(`Mongoose disconnected to: ${dbUrl}`)
});

export { connectDb };