const express = require('express');
const app = express();
const port = 3000;

// Serve static files (optional, if you have an "assets" folder)
app.use(express.static('public'));

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
