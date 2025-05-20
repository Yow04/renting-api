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