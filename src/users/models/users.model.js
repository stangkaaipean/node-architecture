import mongoose from 'mongoose';
import { connectDb } from '../../db/connect-db';

const users = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  image: String,
  gender: {
    type: String,
    enum: ["M", "W", "LGBTQ"]
  },
  currentRoundPoints: Number,
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  birthDate: Date,
  phoneNumber: String,
  address: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  emergencyContact: {
    firstName: String,
    lastName: String,
    phoneNumber: String
  },
}, { timestamps: true });

const Users = mongoose.model('Users', users);

export async function create(user) {
  await connectDb();
  return Users.create(user);
}

export async function isUsernameInUse(username) {
  await connectDb();
  return Users.exists({ username: username });
}

export async function isEmailInUse(email) {
  await connectDb();
  return Users.exists({ email: email });
}

export async function isUserExists(username, email) {
  await connectDb();
  const isUsrnameInUse = await isUsernameInUse(username);
  const isEmilInUse = await isEmailInUse(email);
  return (isUsrnameInUse || isEmilInUse);
} 