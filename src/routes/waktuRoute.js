import express from "express";
import waktuControllers from "../controllers/waktuControllers.js";
import { verifyToken } from "../middleware/verifyToken.js";

const Router = express.Router();

Router.get("/all-waktu", verifyToken, waktuControllers.getAllSlotWaktu);

export default Router;
