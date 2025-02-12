import appointment from "../models/appointment.js";

const getAllAppointments = async () => {
  return await appointment.find();
};

const getAppointment = async (id) => {
  try {
    return await appointment.findById(id);
  } catch (error) {
    throw new Error();
  }
};

const saveAppointment = async ({ date, doctortId, pacientId }) => {
  try {
    const prescription = new appointment({ date, doctortId, pacientId });
    return await prescription.save();
  } catch (error) {
    throw new Error();
  }
};

const updateAppointment = async (id, { date, doctorId, pacientId }) => {
  try {
    return await appointment.findByIdAndUpdate(
      id,
      { date, doctorId, pacientId },
      { new: true }
    );
  } catch (error) {
    throw new Error();
  }
};

const deleteAppointment = async (id) => {
  try {
    return await appointment.findByIdAndUpdate(id);
  } catch (error) {
    throw new Error();
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
