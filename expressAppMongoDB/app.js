//USING EXPRESS JS
const express = require('express');

//express app
const app = express(); //create an instant  of express 

//listen for request
app.listen(3000);

app.get('/', (req, res)=>{
    // res.send('<p>Hello World!</p>');
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res)=>{
    // res.send('<p>Hello World!</p>'); 
    res.sendFile('./views/about.html', {root: __dirname});
});


//redirects
app.get('/about-us', (req, res)=>{
    res.redirect('/about');
});


//404
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});
