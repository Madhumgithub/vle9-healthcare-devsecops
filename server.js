const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const DB_PASSWORD = process.env.DB_PASSWORD; // Securely pulled from environment

app.get('/', (req, res) => {
  res.send('Healthcare System API - Secure Node Endpoint');
});

app.listen(PORT, () => {
  console.log(`Healthcare service active on port ${PORT}`);
});
