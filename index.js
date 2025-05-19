import express from 'express';
import authRoute from './src/routes/Authroute.js';


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use Router
app.use('/auth', authRoute);

// cek jika route tidak ditemukan
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Server running
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


