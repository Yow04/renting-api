import express from "express";
import lapanganController from "../controllers/lapanganController.js";

const Router = express.Router();

Router.get("/", lapanganController.getAllLapangan);
Router.get("/:id", lapanganController.getByIdLapangan);
Router.post("/", lapanganController.inputDetailLapangan);
Router.put("/:id", lapanganController.updateDetailLapangan);

export default Router;
