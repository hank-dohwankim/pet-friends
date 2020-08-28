const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
  },
  breed: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
  },
  serialNumber: {
    type: String,
  },
  isNeutralized: {
    type: Boolean,
  },
  coordinate: [
    {
      latitude: {
        type: String,
        required: true,
      },
      longitude: {
        type: String,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Pet = mongoose.model('pet', PetSchema);
