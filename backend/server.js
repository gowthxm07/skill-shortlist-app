const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Test endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the Skill Shortlist App backend!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});