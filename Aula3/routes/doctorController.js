import express from "express";
import bcrypt from "bcrypt";
import doctorServive from "../services/doctorService.js";

let router = express.Router();

router.get("/doctors", async (req, res) => {
  try {
    const doctors = await doctorServive.getAllDoctors();
    res.send(doctors);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/getDoctor/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await doctorServive.getDoctor(id);
    res.send(doctor);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/postDoctor", async function (req, res) {
  const {
    name,
    login,
    password,
    medicalSpecialty,
    medicalRegistration,
    email,
    phone,
  } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const doctor = await doctorServive.saveDoctor({
      name,
      login,
      password,
      medicalSpecialty,
      medicalRegistration,
      email,
      phone,
    });
    res.status(201).send(doctor);
  } catch (error) {
    console.log(error);
    res.status(500).send("Falha ao registrar médico " + error);
  }
});

router.put("/getDoctor/:id", async (req, res) => {
  const { id } = req.params;
  const {
    name,
    login,
    password,
    medicalSpecialty,
    medicalRegistration,
    email,
    phone,
  } = req.body;
  try {
    const doctor = await doctorServive.updateDoctor(id, {
      name,
      login,
      password,
      medicalSpecialty,
      medicalRegistration,
      email,
      phone,
    });
    res.send(doctor);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete("/doctors/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await doctorServive.deleteDoctor(id);
    res.send(doctor);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router;
