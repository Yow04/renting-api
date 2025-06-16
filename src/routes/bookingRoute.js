import express from "express";
import bookingControllers from "../controllers/bookingControllers.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { MidPengelola } from "../middleware/MidPengelola.js";
import { MidPenyewa } from "../middleware/MIdPenyewa.js";

const Router = express.Router();

Router.get("/", verifyToken, MidPengelola, bookingControllers.getAllBooking);
Router.post(
  "/create",
  verifyToken,
  MidPenyewa,
  bookingControllers.createBooking
);
Router.get("/user-book", verifyToken, bookingControllers.getBookingByUser);
Router.put(
  "/update/:id",
  verifyToken,
  MidPengelola,
  bookingControllers.updateBookingStatus
);
Router.get(
  "/booking/:id",
  verifyToken,
  MidPengelola,
  bookingControllers.getBookingByIdBooking
);
Router.get(
  "/for-community",
  verifyToken,
  MidPenyewa,
  bookingControllers.getBookingForCommunity
);
Router.delete(
  "/delete/:id",
  verifyToken,
  MidPengelola,
  bookingControllers.deleteBookingByIdBooking
);

export default Router;
