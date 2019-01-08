const express = require('express'); // Pulling Express Module
const app = express(); // Call Express module


//Modularized Routers, App.USE is middleware and the sequence is important
app.use(express.static('public'));
app.use(require('./routes/index.js'));
app.use(require('./routes/projects.js'))
app.use(require('./routes/about.js'));
app.use(require('./routes/books.js'));
app.use(require('./routes/speakers.js'));

app.listen(3000, ()=>{
    console.log('Running on port 3000');
})