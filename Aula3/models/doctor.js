import { mongoose, Schema } from "mongoose";

const schema = mongoose.schema;

const doctorSchema = new Schema({
  doctorID: {
    type: String,
    required: [true, "DoctorId is required"],
  },
  name: {
    type: String,
    required: [true, "DoctorName is required"],
  },
  login: {
    type: String,
    required: [true, "Login is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  medicalSpecialty: {
    type: String,
    required: [true, "Medical Specialty is required"],
  },
  medicalRegistration: {
    type: String,
    required: [true, "Medical Registration is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const doctor = mongoose.model("Doctor", doctorSchema);

export default doctor;
