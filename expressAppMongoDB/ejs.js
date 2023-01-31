//USING EXPRESS JS
const express = require('express');
const morgan = require('morgan'); //middleware built-in package
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');


//express app
const app = express(); //create an instant  of express 

//Connect to MongoDB Atlas 
const dbURI = 'mongodb+srv://user1:test123@nodetutorial.wc0ywmy.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=> app.listen(3000))
    .catch((error)=> console.log(error));


//register view engine
app.set('view engine', 'ejs');


//Add CSS using static
app.use(express.static('public'));

//Middleware
app.use(express.urlencoded({extended: true}));


//mongoose sample routes
// app.get('/add-blogs', (req, res)=>{ //ADD DATA TO DB
//     const blog = new Blog({
//         title: 'New Blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//         .then((result)=> res.send(result))
//         .catch((error)=> console.log(error));
// });

// app.get('/all-blogs', (req, res)=>{ //GET DATA TO DB
//     Blog.find()
//         .then((result)=> res.send(result))
//         .catch((error)=> console.log(error));
// });

// app.get('/single-blog', (req, res)=>{ //FIND BY ID
//     Blog.findById('63aaa8d10245dbd26505c6b7')
//         .then((result)=> res.send(result))
//         .catch((error)=> console.log(error));
// });


//routes
app.get('/', (req, res)=>{
    res.redirect('/blogs');
});

app.get('/about', (req, res)=>{
    res.render('about', {title: 'About'});
});


//blog routes
app.use('/blogs', blogRoutes); //will run only when the url starts with /blogs


//404
app.use((req,res)=>{
    res.status(404).render('404', {title: '404'});
});

