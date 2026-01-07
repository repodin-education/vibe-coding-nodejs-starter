const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// CORS for local development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Assignment 2: Hello World endpoint
// TODO: Implement GET /api/hello endpoint that returns { message: "Hello Vibe!" }
// Use Cursor AI to help you implement this!

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});














