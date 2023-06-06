
const express = require('express')

// create an instance of express

const app = express();

// register view engines

//configuring view eng to ejs
app.set('view engine','ejs');

// listen for request
app.listen(3000)

app.get('/',(req,res)=>{

    //new method to send to browser
    //    res.send('<p> home page </p>');

    // res.sendFile('./views/index.html',{root:__dirname})

    // using dynamic file
    res.render('index')

});

app.get('/about',(req,res)=>{
    // res.sendFile('./views/about.html',{root:__dirname})
    res.render('about')

});

//redirecting

app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})

app.get('/blogs/create',(req,res)=>{
    res.render('create');
})

//404 page
//it is firing this req,res obj every time and 
//from top to botttom it matches url to firs arg of senFile if it match then it stops if not it invoke its own location;

// but we have to choose status code 404 manually using status fn
app.use((req,res)=>{
    // res.status(404).sendFile('./views/404.html',{root:__dirname})

   res.status(404).render('404');
})