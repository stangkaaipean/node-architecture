import mongoose from 'mongoose';

const plans = new mongoose.Schema({
  name: String,
  description: String,
  cost: String,
  totalDonation: Number,
  subscribedContent: mongoose.Schema.Types.ObjectId,
  activated: Boolean
}, { timestamps: true })

const Plans = mongoose.model('Plans', plans);