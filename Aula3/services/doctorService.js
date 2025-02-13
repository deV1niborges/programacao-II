import doctorRepository from "../repositories/doctorRepository.js";

const getAllDoctors = async () => {
  return doctorRepository.getAllDoctors();
};

const getDoctor = async (id) => {
  return doctorRepository.getDoctor(id);
};

const saveDoctor = async ({
  name,
  login,
  password,
  medicalSpecialty,
  medicalRegistration,
  email,
  phone,
}) => {
  return doctorRepository.saveDoctor({
    name,
    login,
    password,
    medicalSpecialty,
    medicalRegistration,
    email,
    phone,
  });
};

const updateDoctor = async (
  id,
  { name, login, password, medicalSpecialty, medicalRegistration, email, phone }
) => {
  return await doctorRepository.updateDoctor(id, {
    name,
    login,
    password,
    medicalSpecialty,
    medicalRegistration,
    email,
    phone,
  });
};

const deleteDoctor = async (id) => {
  return await doctorRepository.deleteDoctor(id);
};

const doctorService = {
  getAllDoctors,
  getDoctor,
  saveDoctor,
  updateDoctor,
  deleteDoctor,
};

export default doctorService;
