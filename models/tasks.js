// require the Mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// Create a new Mongoose Schema for tasks
const tasksSchema = new mongoose.Schema({
    // Define a field "task" of type String, which is required (must be present)
    task: { type: String, required: true },

    // Define a field "category" of type String, which is required (must be present)
    category: { type: String, required: true },

    // Define a field "date" of type Date, which is required (must be present)
    date: { type: Date, required: true },
});

// Create a Mongoose model called "tasks" using the tasksSchema
// This model will allow us to interact with the "tasks" collection in the MongoDB database
const tasks = mongoose.model('tasks', tasksSchema);

// Export the "tasks" model so that it can be used in other files
module.exports = tasks;
