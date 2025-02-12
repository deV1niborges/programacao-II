import { mongoose, Schema } from "mongoose";

const schema = mongoose.schema;

const pacientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Pacient name is required"],
  },
  birthData: {
    type: Date,
    required: [true, "Birth data is required"],
  },
  email: {
    type: String,
    required: [true, "Email contact is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const pacient = mongoose.model("Pacient", pacientSchema);

export default pacient;
