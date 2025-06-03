import prisma from "../../prisma/prisma.js";

const getAllLapangan = async (req, res) => {
  try {
    const lapangan = await prisma.detailLapangan.findMany();
    res.status(200).json({
      status: "success",
      message: "Berhasil mendapatkan semua lapangan",
      data: lapangan,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Gagal mendapatkan semua lapangan",
      data: error,
    });
  }
};

const getByIdLapangan = async (req, res) => {
  const { id } = req.params;
  try {
    const lapangan = await prisma.detailLapangan.findUnique({
      where: { id: id },
    });
    if (!lapangan) {
      return res.status(404).json({
        status: "error",
        message: "Lapangan tidak ditemukan",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Berhasil mendapatkan lapangan",
      data: lapangan,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Gagal mendapatkan lapangan",
      data: error,
    });
  }
};

const inputDetailLapangan = async (req, res) => {
  const { nama, alamat, harga, tipeLapangan, linkGambar, noTelp, deskripsi } =
    req.body;

  try {
    // Validasi input
    if (
      !nama ||
      !alamat ||
      !harga ||
      !tipeLapangan ||
      !linkGambar ||
      !noTelp ||
      !deskripsi
    ) {
      return res.status(400).json({
        status: "error",
        message: "Semua field harus diisi",
      });
    }

    const newLapangan = await prisma.detailLapangan.create({
      data: {
        nama,
        alamat,
        harga,
        tipeLapangan,
        linkGambar,
        noTelp,
        deskripsi,
      },
    });

    res.status(201).json({
      status: "success",
      message: "Berhasil menambahkan lapangan",
      data: newLapangan,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Gagal menambahkan lapangan",
      data: error,
    });
  }
};

const updateDetailLapangan = async (req, res) => {
  const { id } = req.params;
  const { nama, alamat, harga, tipeLapangan, linkGambar, noTelp, deskripsi } =
    req.body;

  try {
    const updatedLapangan = await prisma.detailLapangan.update({
      where: { id: id },
      data: {
        nama,
        alamat,
        harga,
        tipeLapangan,
        linkGambar,
        noTelp,
        deskripsi,
      },
    });

    res.status(200).json({
      status: "success",
      message: "Berhasil memperbarui lapangan",
      data: updatedLapangan,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Gagal memperbarui lapangan",
      data: error,
    });
  }
};

export default {
  getAllLapangan,
  getByIdLapangan,
  inputDetailLapangan,
  updateDetailLapangan,
};
