import express from 'express';
import { register, login } from '../controllers/authControllers.js';

const Router = express.Router();

// Tidak butuh JWT untuk register dan login
Router.post('/register', register);
Router.post('/login', login);


export default Router;