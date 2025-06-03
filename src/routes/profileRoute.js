import express from 'express';
import { getAllUsers, getCurrentUser}  from '../controllers/profileControllers.js';
import { verifyToken } from '../middleware/verifyToken.js';

const Router = express.Router();

// Profile Route
// Route ini membutuhkan autentikasi, jadi hanya bisa diakses oleh user yang sudah login
Router.get('/users', verifyToken, getAllUsers);
Router.get('/current-user', verifyToken, getCurrentUser);

export default Router;