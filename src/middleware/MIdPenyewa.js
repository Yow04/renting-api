export const MidPenyewa = (req, res, next) => {
    if (req.userId.role !== 'penyewa') {
        return next();
    }
    return res.status(403).json({
        status: 'error',
        message: 'Ini untuk penyewa',
    });
};