import mongoose from 'mongoose';
import { connectDb } from '../../db/connect-db';

const users = new mongoose.Schema({
  username: String,
  password: String,
  image: String,
  gender: {
    type: String,
    enum: ["M", "W", "LGBTQ"]
  },
  currentRoundPoints: Number,
  firstName: String,
  lastName: String,
  birthDate: Date,
  phoneNumber: String,
  address: String,
  email: String,
  emergencyContact: {
    firstName: String,
    lastName: String,
    phoneNumber: String
  },
}, { timestamps: true })

const Users = mongoose.model('Users', users);

export async function create(user) {
  await connectDb();
  return Users.create(users);
}