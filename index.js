const express = require('express');
const app = express()
const port = 8000;

// middleware to use router
app.use("/", require('./routes'))

// setup view engine
app.set('view engine', 'ejs');
app.set('views', './views')


app.listen(port, (err) =>{
    if(err){
        console.log(`Error while running the server: ${err}`)
    }
    console.log(`Serrver is running on the port: ${port}`)
});