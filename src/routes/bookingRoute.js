import express from 'express';
import bookingControllers from '../controllers/bookingControllers.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { MidPengelola } from '../middleware/MidPengelola.js';

const Router = express.Router();

Router.get('/', verifyToken, MidPengelola, bookingControllers.getAllBooking);
Router.post('/create', verifyToken, bookingControllers.createBooking);
Router.get('/user-book', verifyToken, bookingControllers.getBookingByUser);
Router.put('/update/:id', verifyToken, MidPengelola, bookingControllers.updateBookingStatus);

export default Router;
