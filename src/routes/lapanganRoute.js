import express from "express";
import lapanganController from "../controllers/lapanganController.js";
import { MidPengelola } from "../middleware/MidPengelola.js";
import { verifyToken } from "../middleware/verifyToken.js";

const Router = express.Router();

Router.get("/", lapanganController.getAllLapangan);
Router.get("/:id", lapanganController.getByIdLapangan);
Router.post(
  "/",
  verifyToken,
  MidPengelola,
  lapanganController.inputDetailLapangan
);
Router.put(
  "/:id",
  verifyToken,
  MidPengelola,
  lapanganController.updateDetailLapangan
);

export default Router;
