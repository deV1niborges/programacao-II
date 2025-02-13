import appointment from "../models/appointment.js";

const getAllAppointments = async () => {
  return await appointment.find();
};

const getAppointment = async (id) => {
  try {
    return await appointment.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

const saveAppointment = async ({ date, doctorId, patientId }) => {
  try {
    const newAppintment = new appointment({ date, doctorId, patientId });
    return await newAppintment.save();
  } catch (error) {
    throw new Error(error);
  }
};

const updateAppointment = async (id, { date, doctorId, patientId }) => {
  try {
    return await appointment.findByIdAndUpdate(
      id,
      { date, doctorId, patientId },
      { new: true }
    );
  } catch (error) {
    throw new Error(error);
  }
};

const deleteAppointment = async (id) => {
  try {
    return await appointment.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

const appointmentRepository = {
  getAllAppointments,
  getAppointment,
  saveAppointment,
  updateAppointment,
  deleteAppointment,
};

export default appointmentRepository;
