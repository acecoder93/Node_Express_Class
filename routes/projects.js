const express = require('express');

const router = express.Router();

router.get('/projects?', (req, res)=>{
    res.send('Projects Page');
})


// app.get('/projects?', (req, res)=>{
//     res.send('Projects Page');
// })
module.exports = router