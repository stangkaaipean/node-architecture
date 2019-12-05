import dotenv from 'dotenv'
dotenv.config();

export const config = {
  port: process.env.API_PORT,
  dbPort: process.env.DB_PORT,
  dbUrl: process.env.DB_URL
}