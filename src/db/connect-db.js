import mongoose from 'mongoose';
import { config } from '../config/config'

const dbUrl = `${config.dbUrl}:${config.dbPort}`;

async function connectDb() {
  if (mongoose.connection.readyState === mongoose.STATES.disconnected) {
    await mongoose.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true });
  }
  return mongoose;
}

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to: ${dbUrl}`)
});

mongoose.connection.once('error', (err) => {
  console.log(`Mongoose default connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose disconnected to: ${dbUrl}`)
});

export { connectDb };