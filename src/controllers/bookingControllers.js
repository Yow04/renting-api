import prisma from "../../prisma/prisma.js";

// Get semua booking
const getAllBooking = async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        user: true,
        detailLapangan: true,
        slotWaktu: true,
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
    slotWaktuId,
    tanggalBooking,
    tersedia,
    totalharga,
    isLookingForPartner,
  } = req.body;

  const userId = req.user.id;

  try {
    if (!lapanganId || !tanggalBooking || tersedia === undefined || totalharga === undefined) {
      return res.status(400).json({
        status: "error",
        message: "Semua field booking harus diisi",
      });
    }

    const tanggal = new Date(tanggalBooking);

    const conflict = await prisma.booking.findFirst({
      where: {
        lapanganId,
        slotWaktuId,
        tanggalBooking: tanggal,
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

    const newBooking = await prisma.booking.create({
      data: {
        userId,
        lapanganId,
        slotWaktuId,
        tanggalBooking: tanggal,
        tersedia,
        totalharga,
        status: "PENDING",
        isLookingForPartner: isLookingForPartner || false,
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

// Get booking milik user
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
        slotWaktu: true,
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

// Update status booking
const updateBookingStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const allowedStatus = ["PENDING", "CONFIRMED", "COMPLETED", "CANCELED"];

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
        tersedia: status === "CONFIRMED" ? false : status === "CANCELED" ? true : undefined,
        updatedAt: new Date(),
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

// Get booking berdasarkan ID
const getBookingByIdBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await prisma.booking.findUnique({
      where: { id },
      include: {
        user: true,
        detailLapangan: true,
        slotWaktu: true,
      },
    });

    if (!booking) {
      return res.status(404).json({
        status: "error",
        message: "Booking tidak ditemukan",
      });
    }

    if (req.user.role !== "Admin" && req.user.id !== booking.userId) {
      return res.status(403).json({
        status: "error",
        message: "Akses ditolak",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Berhasil mendapatkan data booking",
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Gagal mendapatkan data booking",
      error,
    });
  }
};

// Get booking untuk komunitas
const getBookingForCommunity = async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: {
        isLookingForPartner: true,
        status: "PENDING",
      },
      include: {
        user: true,
        detailLapangan: true,
        slotWaktu: true,
      },
      orderBy: {
        tanggalBooking: "asc",
      },
    });

    res.json({
      status: "success",
      data: bookings,
    });
  } catch (error) {
    console.error("Gagal mengambil data komunitas:", error);
    res.status(500).json({
      status: "error",
      message: "Gagal mendapatkan data booking untuk komunitas",
      error,
    });
  }
};

// Join booking komunitas
const joinBooking = async (req, res) => {
  const { id } = req.params;
  const partnerId = req.user.id;

  try {
    const booking = await prisma.booking.findUnique({
      where: { id },
    });

    if (!booking) {
      return res.status(404).json({
        status: "error",
        message: "Booking tidak ditemukan",
      });
    }

    if (!booking.isLookingForPartner) {
      return res.status(400).json({
        status: "error",
        message: "Booking ini sudah memiliki partner",
      });
    }

    if (booking.userId === partnerId) {
      return res.status(400).json({
        status: "error",
        message: "Kamu tidak bisa join booking milikmu sendiri",
      });
    }

    const updated = await prisma.booking.update({
      where: { id },
      data: {
        isLookingForPartner: false,
        partnerId,
      },
    });

    res.status(200).json({
      status: "success",
      message: "Berhasil join booking",
      data: updated,
    });
  } catch (error) {
    console.error("Gagal join booking:", error);
    res.status(500).json({
      status: "error",
      message: "Gagal join booking",
      error,
    });
  }
};

// Delete booking
const deleteBookingByIdBooking = async (req, res) => {
  const { id } = req.params;

  if (req.user.role !== "Admin") {
    return res.status(403).json({
      status: "error",
      message: "Hanya admin yang bisa menghapus booking",
    });
  }

  try {
    const existing = await prisma.booking.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({
        status: "error",
        message: "Booking tidak ditemukan",
      });
    }

    await prisma.booking.delete({
      where: { id },
    });

    res.status(200).json({
      status: "success",
      message: "Booking berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Gagal menghapus booking",
      error,
    });
  }
};

// Get booking berdasarkan tanggal
const getBookByDate = async (req, res) => {
  const { tanggal } = req.params;
  try {
    const start = new Date(tanggal);
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(end.getDate() + 1);

    const data = await prisma.booking.findMany({
      where: {
        tanggalBooking: {
          gte: start,
          lt: end,
        },
      },
    });

    return res.status(200).json({
      status: "success",
      message: "Berhasil mendapatkan booking",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Gagal mendapatkan booking",
      error,
    });
  }
};

export default {
  getAllBooking,
  createBooking,
  getBookingByUser,
  updateBookingStatus,
  getBookingByIdBooking,
  deleteBookingByIdBooking,
  getBookingForCommunity,
  getBookByDate,
  joinBooking, // ✅ ditambahkan
};
