import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({
        status: 'error',
        message: 'Token tidak ditemukan',
        });
    }
    
    jwt.verify(token, process.env.ACCES_TOKEN, (err, decoded) => {
        if (err) {
        return res.status(403).json({
            status: 'error',
            message: 'Token tidak valid',
        });
        }
        req.userId = {
            id: decoded.id,
            role: decoded.role,
        }
        next();
    });
    }

