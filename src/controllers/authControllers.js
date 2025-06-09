import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../prisma/prisma.js";

export const register = async (req, res) => {
  // Untuk melakukan cek apakah semua kolom sudah diisi
  const { username, email, password, nomor, role } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      status: "error",
      message: "Semua kolom harus diisi",
    });
  }
  // Untuk melakukan cek apakah password sudah lebih dari 8 karakter
  if (password.length < 8) {
    return res.status(400).json({
      status: "error",
      message: "Password harus lebih dari 8 karakter",
    });
  }

  try {
    // Untuk melakukan cek apakah email sudah terdaftar
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res.status(400).json({
        status: "error",
        message: "Email sudah terdaftar",
        data: existingUser,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
        nomor: nomor,
        role: role || "User", //default role jika tidak ada yang diberikan
        role: role || "Admin",
      },
    });

    res.status(201).json({
      status: "success",
      message: "Register successful",
      data: {
        username,
        email,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Register failed",
      data: error,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  // Memastikan semua kolom diisi
  if (!email || !password) {
    return res.status(400).json({ message: "Semua kolom harus diisi" });
  }

  try {
    // Mencari pengguna berdasarkan email
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // Validasi jika email tidak terdaftar
    if (!user) {
      return res.status(400).json({ message: "Email belum terdaftar" });
    }

    // Memeriksa kecocokan password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Password salah" });
    }

    // Penambahan token
    // Menggunakan JWT untuk membuat token akses
    const payload = {
      userId: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    };
    const accesToken = jwt.sign(payload, process.env.ACCES_TOKEN, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      message: "Login berhasil",
      accesToken,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        nomor: user.nomor,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
