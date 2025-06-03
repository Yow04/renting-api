import prisma from '../../prisma/prisma.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json({
            status: 'success',
            message: 'Get all users successful',
            data: users
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Get all users failed',
            data: error
        });
    }
}


export const getCurrentUser = async (req, res) => {
    try {
        console.log(req.user.id);
        const user = await prisma.user.findUnique({
            where: { id: req.user.id }
        });
        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'User not found'
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Get user by ID successful',
            data: user
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Get user by ID failed',
            data: error
        });
    }
}