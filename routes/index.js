// Import the Express library to create a router
const express = require('express');

// Create a new router instance using the express.Router() method
const router = express.Router();

// Import the home_controller module, which contains the controller functions for various routes
const homeController = require('../controllers/home_controller');

// Define a GET route for the root URL ("/") that maps to the homeController's "home" function
router.get("/", homeController.home);

// Define a POST route for the "/add-task" URL that maps to the homeController's "addTask" function
router.post("/add-task", homeController.addTask);

// Define a GET route for the "/delete-task/:id" URL that maps to the homeController's "deleteTask" function
// The ":id" parameter is a placeholder for the unique identifier of the task to be deleted
router.get("/delete-task/:id", homeController.deleteTask);

// Export the router module to make it available for use in other files
module.exports = router;
