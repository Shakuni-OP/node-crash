
const express = require('express');

const app = express();

const morgan = require('morgan')

const mongoose = require('mongoose')

const Blog = require('./models/blog')


//connect to mongodb
const dbURI ='mongodb+srv://batman:test212@shakuni-node-data.fuokosw.mongodb.net/node-tuts?retryWrites=true&w=majority';
 mongoose.connect(dbURI)
 .then((result)=>{console.log('connected to db')
// we only want to liaten after req
app.listen(3000);


})
.catch((err)=> console.log(err));


// register view engines
  app.set('view engine','ejs');

 



//middlware

// app.use(morgan('tiny'));

// middleware and static files

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
// app.get('/add-blog',(req,res)=>{
//     const blog = new Blog({
//         title:'new blog',
//         snippets:'about my new blog',
//         body:'lorem ipsum is my blog'
//     });
//     blog.save()
//  .then((result)=>{
//     res.send(result)
//  })
//  .catch((err)=>{
//     console.log(err)

//  })
// })

// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//     .then(result=>{
//           res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })

// // app.get('/single-blog',(req,res) => {
// //     Blog.findById('<id>')
//       .then((result)=>{
//         console.log(result)
//       })
//       .catch((err)=>{
//         console.log(err)
//       })
// // })
 


app.get('/',(req,res)=>{
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //   ];
    // res.render('index',{title:'Home',blogs})

    res.redirect('/blogs')
})

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
})

//blog routes

app.get('/blogs',(req,res)=>{
    Blog.find().sort({ createdAt: -1})
    .then((result)=>{
        res.render('index',{title:'ALL BLOGS',blogs:result})

    })
    .catch((err)=>{
        console.log()
    })
})
 // inputs from form on create blog to db
 app.post('/blogs',(req,res)=>{
 // to get that data in compatible object format we are using an middleware urlencoded

 console.log(req.body)

//add this data into blog model 
const blog = new Blog(req.body);

blog.save()
.then((req,res)=>{
    res.redirect('/blogs')
})
.catch((err)=>{
    console.log(err);
})
 })


app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create A New Blog'})
})

//redirects
app.get('/about-me',(req,res)=>{
    res.redirect('about');  
})

app.use((req,res)=>{
    res.status(404).render('404',{title:'Error Found'})
})