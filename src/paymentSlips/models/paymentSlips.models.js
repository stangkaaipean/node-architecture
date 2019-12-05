import mongoose from 'mongoose';

const paymentSlips = new mongoose.Schema({
  content: mongoose.Schema.Types.ObjectId,
  paticipant: mongoose.Schema.Types.ObjectId,
  image: String,
  status:{
    type: String,
    enum: ["none", "uploaded", "verified", "rejected"]
  }
}, { timestamps: true })

const PaymentSlips = mongoose.model('PaymentSlips', paymentSlips);