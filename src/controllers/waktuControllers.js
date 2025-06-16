import prisma from "../../prisma/prisma.js";
const getAllSlotWaktu = async (req, res) => {
  try {
    const slots = await prisma.slotwaktu.findMany({
      orderBy: {
        jamMulai: 'asc'
      }
    });
    res.status(200).json({
      status: "success",
      data: slots
    });
  } catch (err) {
    console.error("Error getAllSlotWaktu:", err);
    res.status(500).json({
      status: "error",
      message: "Gagal mendapatkan slot waktu",
    });
  }
};

export default {
  getAllSlotWaktu
};