const express = require('express');
const app = express();
const port = 3000;

// Route to send a random number
app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
  res.send({ number: randomNumber });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
    