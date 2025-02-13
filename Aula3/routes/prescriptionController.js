import express from "express";
import prescriptionServive from "../services/prescriptionService.js";

let router = express.Router();

router.get("/prescriptions", async (req, res) => {
  try {
    const prescriptions = await prescriptionServive.getAllPrescriptions();
    res.send(prescriptions);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/getPrescription/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await prescriptionServive.getPrescription(id);
    res.send(prescription);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/postPrescription", async function (req, res) {
  const { date, appointmentId, medicine, dosage, instructions } = req.body;
  try {
    const prescription = await prescriptionServive.savePrescription({
      date,
      appointmentId,
      medicine,
      dosage,
      instructions,
    });
    res.send(prescription);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/prescription/:id", async (req, res) => {
  const { id } = req.params;
  const { date, appointmentId, medicine, dosage, instructions } = req.body;
  try {
    const prescription = await prescriptionServive.updatePrescription(id, {
      date,
      appointmentId,
      medicine,
      dosage,
      instructions,
    });
    res.send(prescription);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete("/prescriptions/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await prescriptionServive.deletePrescription(id);
    res.send(prescription);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router;
