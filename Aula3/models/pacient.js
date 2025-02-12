import { mongoose, Schema } from "mongoose";

const schema = mongoose.schema;

const pacientSchema = new Schema({
  date: {
    type: Date,
    required: [true, "Appointment date is required"],
  },
  doctorID: {
    type: String,
    required: [true, "DoctorId is required"],
  },
  pacientID: {
    type: String,
    required: [true, "PacientId is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const pacient = mongoose.model("Pacient", pacientSchema);

export default pacient;
