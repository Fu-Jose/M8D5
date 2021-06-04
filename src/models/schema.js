import mongoose from "mongoose";
const { Schema } = mongoose;

const AccomodationSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  maxGuests: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

export default AccomodationSchema;
