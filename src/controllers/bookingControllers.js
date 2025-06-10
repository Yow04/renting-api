import prisma from "../../prisma/prisma.js";

const getAllBooking = async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        user: true,
        detailLapangan: true,
      },
    });

    res.status(200).json({
      status: "success",
      message: "Berhasil mendapatkan semua booking",
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Gagal mendapatkan data booking",
      error,
    });
  }
};

// Membuat booking baru
const createBooking = async (req, res) => {
  const {
    lapanganId,
    tanggalBooking,
    jamMulai,
    jamSelesai,
    totalharga,
  } = req.body;

  const userId = req.user.id; // dari JWT

  try {
    if (!lapanganId || !tanggalBooking || !jamMulai || !jamSelesai || !totalharga) {
      return res.status(400).json({
        status: "error",
        message: "Semua field booking harus diisi",
      });
    }

    const tanggal = new Date(tanggalBooking);
    const mulai = new Date(jamMulai);
    const selesai = new Date(jamSelesai);

    // Cek konflik
    const conflict = await prisma.booking.findFirst({
      where: {
        lapanganId,
        tanggalBooking: tanggal,
        OR: [
          {
            jamMulai: {
              lte: mulai,
            },
            jamSelesai: {
              gt: mulai,
            },
          },
          {
            jamMulai: {
              lt: selesai,
            },
            jamSelesai: {
              gte: selesai,
            },
          },
        ],
        status: {
          not: "CANCELED", 
        },
      },
    });

    if (conflict) {
      return res.status(409).json({
        status: "error",
        message: "Waktu booking bentrok dengan booking lain",
      });
    }

    // Simpan booking
    const newBooking = await prisma.booking.create({
      data: {
        userId,
        lapanganId,
        tanggalBooking: tanggal,
        jamMulai: mulai,
        jamSelesai: selesai,
        totalharga,
        status: "PENDING",
      },
    });

    res.status(201).json({
      status: "success",
      message: "Booking berhasil dibuat",
      data: newBooking,
    });
  } catch (error) {
    console.log("Booking Error:", error);
    res.status(500).json({
      status: "error",
      message: "Gagal membuat booking",
      error,
    });
  }
};

// Get booking milik user (user login)
const getBookingByUser = async (req, res) => {
  const { userId } = req.params;

  if (req.user.id !== userId && req.user.role !== "Admin") {
    return res.status(403).json({
      status: "error",
      message: "Akses ditolak",
    });
  }

  try {
    const bookings = await prisma.booking.findMany({
      where: { userId },
      include: {
        detailLapangan: true,
      },
      orderBy: {
        tanggalBooking: "desc",
      },
    });

    res.status(200).json({
      status: "success",
      message: "Berhasil mendapatkan booking user",
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Gagal mendapatkan booking user",
      error,
    });
  }
};

// Update status booking (admin)
const updateBookingStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const allowedStatus = ["PENDING", "CONFIRMED", "COMPLETED"];

  if (!allowedStatus.includes(status)) {
    return res.status(400).json({
      status: "error",
      message: "Status booking tidak valid",
    });
  }

  try {
    const updated = await prisma.booking.update({
      where: { id },
      data: {
        status,
        updatedAt: new Date(), // isi updatedAt
      },
    });

    res.status(200).json({
      status: "success",
      message: "Status booking berhasil diupdate",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Gagal update status booking",
      error,
    });
  }
};

export default {
  getAllBooking,
  createBooking,
  getBookingByUser,
  updateBookingStatus,
};