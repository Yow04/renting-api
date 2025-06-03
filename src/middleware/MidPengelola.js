export const MidPengelola = (req, res, next) => {
    if (req.userId.role !== 'pengelola') {
        return next();
    }
    return res.status(403).json({
        status: 'error',
        message: 'Ini untuk pengelola',
    });
};