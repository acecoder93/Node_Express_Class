
const express = require('express');
const router = express.Router();

router.get('/books', (req, res)=>{
    res.send('Books Page');
})

module.exports = router;


// app.get('/books/:fname/:lname', (req, res)=>{
//     // let bookID = req.param('bookID');
//     let fname = req.param('fname');
//     let lname = req.param('lname');

//     res.send(`my Book: ${fname} ${lname}`);
// })