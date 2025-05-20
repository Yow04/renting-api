import express from 'express';
import { getAllUsers}  from '../controllers/tempControllers.js';
import { verifyToken } from '../middleware/verifyToken.js';

const Router = express.Router();

// Testing dengan cara membuat get agar menampilkan semua user yang sudah terdaftar
// Diperlukan JWT untuk mengakses route ini
Router.get('/users', verifyToken, getAllUsers);

export default Router;