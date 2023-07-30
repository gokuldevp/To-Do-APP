# To Do App
This is a simple To Do App built using Node.js, Express, and MongoDB. It allows users to add, view, and delete tasks with due dates and categories.

## Features
* Add new tasks with a description, category, and due date.
* View a list of all tasks with their details.
* Delete tasks that are completed or no longer needed.

## Usage
1. Start the server:
```
npm start
```
2. Open your web browser and navigate to http://localhost:8000 to access the To Do App.

3. Add new tasks by filling out the form and clicking the "Add Task" button.

4. View all the tasks on the home page, along with their categories and due dates.

5. To delete a task, click on the "Delete" button next to the task you want to remove.

## Technologies Used
* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS (Embedded JavaScript) for templating
* Bootstrap 5 for styling

## Folder Structure
* index.js - Main application file with server setup and configuration.
* config - Contains configuration files for MongoDB connection and other settings.
* controllers - Holds the controller functions for handling different routes.
* models - Defines Mongoose models for tasks.
* routes - Contains Express router with route definitions.
* views - Contains EJS templates for rendering HTML pages.