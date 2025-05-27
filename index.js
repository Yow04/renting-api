import express from "express";
import dotenv from "dotenv";
import authRoute from "./src/routes/Authroute.js";
import tempRoute from "./src/routes/tempRoute.js";
import lapanganRoute from "./src/routes/lapanganRoute.js";

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use Router
app.use("/auth", authRoute);
app.use("/temp", tempRoute);
app.use("/lapangan", lapanganRoute);

// cek jika route tidak ditemukan
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Server running
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
