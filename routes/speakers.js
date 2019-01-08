const express = require('express');
const router = express.Router();
var data = require('../data/data.json');


router.get('/speakers?', (req, res)=>{
    var speakerData = data.speakers
    var html = "";
    var count = 0;

    speakerData.forEach((item)=>{
        html += `
        <li>
            <h2>${item.name}</h2>
            <a href = '/speakers/${count}'>${item.name}</a> 
            <img src = '/images/speakers/${item.shortname}_tn.jpg'>
            <p>${item.summary}</p>

        </li>
        
        `
        count++;
    })
    res.send(`<ul>${html}</ul>`);
})


router.get('/speakers?/:speakerID', (req, res)=>{

    var html;
    var speaker = data.speakers[req.param('speakerID')];

    html = `
        <h2>${speaker.name}</h2>
        <img src = '/images/speakers/${speaker.shortname}_tn.jpg'>
        <p>${speaker.summary}</p>
    `

    res.send(html);

})

module.exports = router;