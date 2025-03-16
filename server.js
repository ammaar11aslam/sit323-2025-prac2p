// Importing the express module
const express = require('express');
const app = express();

// Setting the port for the server
const PORT = process.env.PORT || 3000;

// Serving static files from the "public" directory
app.use(express.static('public'));

// Setting up a basic route that serves an HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
