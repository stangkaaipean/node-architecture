import dotenv from 'dotenv'
dotenv.config();

export const config = {
  port: process.env.API_PORT,
  dbPort: process.env.DB_PORT,
  dbUrl: process.env.DB_URL,
  logLevel: process.env.LOG_LEVEL,
  logFileName: process.env.LOG_FILE_NAME,
  dbName: process.env.DB_NAME,
  algo: process.env.ALGO || 'sha1',
  iterations: process.env.ITERATIONS || 1,
  saltLength: process.env.SALT_LENGTH || 8 ,
  secret: process.env.SECRET,
  expireIn: process.env.EXPIRE_IN
}