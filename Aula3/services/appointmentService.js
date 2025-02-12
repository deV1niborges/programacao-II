import appointmentRepository from "../repositories/appointmentRepository.js";

const getAllAppointments = async () => {
  return appointmentRepository.getAllAppointments();
};

const getAppointment = async (id) => {
  return appointmentRepository.getAppointment(id);
};

const saveAppointment = async ({ date, doctortId, pacientId }) => {
  return appointmentRepository.saveAppointment({ date, doctortId, pacientId });
};

const updateAppointment = async (id, { date, doctorId, pacientId }) => {
  return await appointmentRepository.updateAppointment(id, {
    date,
    doctorId,
    pacientId,
  });
};

const deleteAppointment = async (id) => {
  return await appointmentRepository.deleteAppointment(id);
};

const appointmentService = {
  getAllAppointments,
  getAppointment,
  saveAppointment,
  updateAppointment,
  deleteAppointment,
};

export default appointmentService;
