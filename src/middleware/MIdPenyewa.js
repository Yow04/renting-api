export const MidPenyewa = (req, res, next) => {
  if (req.user?.role === "User") {
    return next(); // lanjut kalau role benar
  }
  return res.status(403).json({
    status: "error",
    message: "Akses hanya untuk User",
  });
};
