import mongoose from "mongoose";

const contents = new mongoose.Schema({
  owner: {
    id: mongoose.Schema.Types.ObjectId,
    firstname: '',
    lastname: ''
  },
  name: String
}, { timestamps: true })

const Contents = mongoose.model('Contents', contents);