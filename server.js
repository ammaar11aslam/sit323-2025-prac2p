// Import the express module
const express = require('express');
const app = express();

// Set the port for the server
const PORT = process.env.PORT || 3000;

// Serve static files (e.g., HTML, CSS) from the "public" directory
app.use(express.static('public'));

// Set up a basic route that serves an HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
