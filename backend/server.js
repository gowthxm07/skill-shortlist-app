const express = require('express');
const pool = require('./db/db');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());

// Auth routes
app.use('/api/auth', authRoutes);

// Test database connection (from before)
app.get('/api/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: 'Database connected', time: result.rows[0].now });
  } catch (err) {
    console.error(err.stack);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Test endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the Skill Shortlist App backend!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});