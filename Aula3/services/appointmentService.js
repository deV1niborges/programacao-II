import appointmentRepository from "../repositories/appointmentRepository.js";

const getAllAppointments = async () => {
  return appointmentRepository.getAllAppointments();
};

const getAppointment = async (id) => {
  return appointmentRepository.getAppointment(id);
};

const saveAppointment = async ({ date, doctorId, patientId }) => {
  return appointmentRepository.saveAppointment({ date, doctorId, patientId });
};

const updateAppointment = async (id, { date, doctorId, patientId }) => {
  return await appointmentRepository.updateAppointment(id, {
    date,
    doctorId,
    patientId,
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
