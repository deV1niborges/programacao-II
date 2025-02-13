import { mongoose, Schema } from "mongoose";

const schema = mongoose.schema;

const prescriptionSchema = new Schema({
  date: {
    type: Date,
    required: [true, "Date OF Prescription date is required"],
  },
  appointmentId: {
    type: String,
    required: [true, "Appointment ID is required"],
  },
  medicine: {
    type: String,
    required: [true, "Medicine is required"],
  },
  dosage: {
    type: String,
    required: [true, "Dosage is required"],
  },
  instructions: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const prescription = mongoose.model("Prescription", prescriptionSchema);

export default prescription;