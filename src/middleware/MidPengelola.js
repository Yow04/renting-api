export const MidPengelola = (req, res, next) => {
  if (req.user?.role === "Admin") {
    return next(); // lanjut kalau role benar
  }
  return res.status(403).json({
    status: "error",
    message: "Akses hanya untuk admin",
  });
};
