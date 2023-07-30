// require the library
const mongoose = require('mongoose');

//connect to the db
mongoose.connect("mongodb://127.0.0.1/task_list_db");

// acquire the connection (to check if it is successfull)
const db = mongoose.connection;

//error - print the message
db.on('error', function(err) { console.log(err.message); });

//Db up and running - print the message
db.once('open',()=>{
    console.log("successfully connected to the db");
});