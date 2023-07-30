// Require the Express library to create an Express application
const express = require('express');

// Create a new Express application
const app = express();

// Define the port number on which the server will listen
const port = 8000;

// Add middleware to parse request bodies (for handling form data in POST requests)
app.use(express.urlencoded({ extended: true }));

// Middleware to use the router for handling routes
// The router is imported from the "./routes" file
// The "/" route is used as the base URL for the router's routes
app.use("/", require('./routes'));

// Setup view engine to use EJS as the template engine
// The view engine will look for EJS templates in the "./views" directory
app.set('view engine', 'ejs');
app.set('views', './views');

// Start the Express server and listen on the defined port
app.listen(port, (err) => {
    if (err) {
        // If there is an error while starting the server, log the error
        console.log(`Error while running the server: ${err}`);
    }
    // If the server starts successfully, log a message indicating the server is running on the specified port
    console.log(`Server is running on the port: ${port}`);
});
