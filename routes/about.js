
const express = require('express');
const router = express.Router();

router.get('/about', (req, res)=>{
    res.send('About Page');
})

module.exports = router;


// app.get('/about/?:fname/?:lname', (req, res)=>{
//     let fname = req.param('fname'); // Sitting on request 
//     let lname = req.param('lname'); // Sittin on request

//     res.send(`<h1>${fname} ${lname}</h1>`);
// })
