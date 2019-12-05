import mongoose from 'mongoose';

const participants = new mongoose.Schema({
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
  allergies: [],
  userID: mongoose.Schema.Types.ObjectId,
  inAndOuts: [{
    inTimestamp: Timestamp,
    outTimestamp: Timestamp
  }],
  contentID: mongoose.Schema.Types.ObjectId,
  moneyDonated: Number,
  participantNotes: String,
  additionalNotes: String,
  donatedPlans: [mongoose.Schema.Types.ObjectId]
}, { timestamps: true })

const Participants = mongoose.model('Participants', participantsparticipants);