import express from "express";
import appointmentController from "./appointmentController.js";
import doctorController from "./doctorController.js";
import pacientController from "./pacientController.js";
import prescriptionController from "./prescriptionController.js";

let router = express.Router();
router.get("/", function (req, res) {
  console.log("Hi!");
  res.status(200).json({ message: "Hi!" });
});

router.use("/", appointmentController);
router.use("/", doctorController);
router.use("/", pacientController);
router.use("/", prescriptionController);

export default router;
