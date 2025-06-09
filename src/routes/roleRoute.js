import express from 'express';
import { verifyToken} from '../middleware/verifyToken.js';
import { MidPengelola } from '../middleware/MidPengelola.js';
import { MidPenyewa } from '../middleware/MIdPenyewa.js';

const Router = express.Router();

Router.get('/admin', verifyToken, MidPengelola, (req, res) => {
    return res.status(200).json({
        status: 'success',
        message: 'Ini untuk admin',
    });
});
Router.get('/user', verifyToken, MidPenyewa, (req, res) => {
    return res.status(200).json({
        status: 'success',
        message: 'Ini untuk user',
    });
});

export default Router;