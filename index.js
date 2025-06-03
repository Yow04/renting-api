import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./src/routes/Authroute.js";
import profileRoute from "./src/routes/profileRoute.js";
import lapanganRoute from "./src/routes/lapanganRoute.js";
import roleRoute from "./src/routes/roleRoute.js";

dotenv.config();
const app = express();
const port = 3000;

// CORS
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use Router
app.use("/auth", authRoute);
app.use("/user", profileRoute);
app.use("/lapangan", lapanganRoute);
app.use("/role", roleRoute);

// cek jika route tidak ditemukan
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Server running
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
