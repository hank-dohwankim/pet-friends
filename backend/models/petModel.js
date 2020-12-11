import mongoose from 'mongoose';

const locationSchema = mongoose.Schema(
  {
    latitude: { type: Number, required: true, default: 0 },
    longitude: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

const petSchema = mongoose.Schema(
  {
    breed: { type: String, required: true },
    name: { type: String, required: true },
    sex: { type: String, required: true },
    location: [locationSchema],
    introduce: { type: String, required: true, default: '...' },
    image: { type: String, required: true, default: '...' },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Pet = mongoose.model('Pet', petSchema);

export default Pet;
