const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Use the specified port or default to 3000

// Define the path to your static HTML file
const staticFilePath = path.join(__dirname, 'index.html');

// Set up middleware to serve static files
app.use(express.static(path.join(__dirname, '')));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(staticFilePath);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
