import prisma from "../../prisma/prisma.js";

const getAllSlotWaktu = async (req, res) => {
  try {
    const slots = await prisma.slotwaktu.findMany({
      orderBy: {
        jamMulai: 'asc'
      }
    });

    const formattedSlots = slots.map(slot => {
      const jamMulaiFormatted = slot.jamMulai
        ? new Date(slot.jamMulai).toISOString().substring(11, 16).replace(':', '.')
        : null;

      const jamSelesaiFormatted = slot.jamSelesai
        ? new Date(slot.jamSelesai).toISOString().substring(11, 16).replace(':', '.')
        : null;

      return {
        id: slot.id,
        jam: `${jamMulaiFormatted} - ${jamSelesaiFormatted}`,
        jamMulai: jamMulaiFormatted,
        jamSelesai: jamSelesaiFormatted,
        createdAt: slot.createdAt,
        updatedAt: slot.updatedAt
      };
    });

    res.status(200).json({
      status: "success",
      data: formattedSlots
    });
  } catch (err) {
    console.error("Error getAllSlotWaktu:", err);
    res.status(500).json({
      status: "error",
      message: "Gagal mendapatkan slot waktu",
    });
  }
};

const getSlotWaktuById = async (req, res) => {
  try {
    const { id } = req.params;
    const slot = await prisma.slotwaktu.findUnique({
      where: { id },
    });

    if (!slot) {
      return res.status(404).json({
        status: "error",
        message: "Slot tidak ditemukan",
      });
    }

    const jamMulai = new Date(slot.jamMulai).toISOString().substring(11, 16).replace(':', '.');
    const jamSelesai = new Date(slot.jamSelesai).toISOString().substring(11, 16).replace(':', '.');

    res.status(200).json({
      status: "success",
      data: {
        jamMulai,
        jamSelesai,
      },
    });
  } catch (err) {
    console.error("Error getSlotWaktuById:", err);
    res.status(500).json({
      status: "error",
      message: "Gagal mengambil slot waktu",
    });
  }
};

export default {
  getAllSlotWaktu,
  getSlotWaktuById, // ← ⬅️ TAMBAHKAN INI DI SINI
};
