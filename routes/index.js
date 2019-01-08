
const express = require('express');
// const app = express(); // This is not needed when code is being modularized
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('hello world');
    // res.send ('<img src = '/public/images/colorful.jpg'>); // Sending HTML that is linked to the "public" folder which contains images and css styling
})

module.exports = router; // Export a method

// Code below has been moved to "Routes" folder
// .GET method 
// app.get('/', (req,res)=>{
//     res.send('Hello World');
// })