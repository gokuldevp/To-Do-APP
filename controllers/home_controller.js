// Import the Mongoose configuration (db) to establish a connection to the database
const db = require('../config/mongoose'); 

// Import the "Task" model, which represents the schema for tasks in the database
const Task = require("../models/tasks");

// Controller function to handle the rendering of the home page
module.exports.home = async (req, res) => {

    // Fetch all tasks from the database using the Task model and store them in the "tasks" variable
    let tasks = await Task.find({});

    // Create an object "homeVariables" that holds data to be passed to the EJS template
    let homeVariables = {
        title: "My To Do App", // The title for the homepage            
        tasks: tasks // The list of tasks fetched from the database       
    };

    // Render the "home" EJS file and pass the "homeVariables" object as data to the template
    return res.render("home", homeVariables);
};

// Controller function to handle the addition of a new task
module.exports.addTask = async (req, res) => {
    try {
        // Create a new task in the database using the Task model and data from the request body
        await Task.create({
            task: req.body.task,
            category: req.body.category,
            date: req.body.date
        });

        // Redirect the client (browser) back to the previous page after successfully adding the task
        return res.redirect('back');
    } catch (error) {
        // If an error occurs during the task creation process, handle the error here
        console.error('Error creating Task:', error);

        // Send an HTTP 500 status code and the message "Error creating Task" to the client (browser)
        res.status(500).send('Error creating Task');
    }
};

// Controller function to handle the deletion of a task
module.exports.deleteTask = async (req, res) => {
    let id = req.params.id;

    try {
        // Find the task by its unique ID and delete it from the database using the Task model
        await Task.findByIdAndDelete(id);

        // Redirect the client (browser) back to the previous page after successfully deleting the task
        return res.redirect('back');
    } catch (err) {
        // If an error occurs during the task deletion process, handle the error here
        console.log("Error while deleting a Task:", err);

        // Send an HTTP 500 status code and the message "Error while deleting a Task" to the client (browser)
        res.status(500).send('Error while deleting a Task');
    }
};
