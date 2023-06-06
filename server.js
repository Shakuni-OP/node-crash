
//req http module

const http = require('http');
const fs = require('fs');
var _ =  require('lodash');

const server = http.createServer((req,res)=>{
 

    // LODASH
     const num = _.random(0,15);
 
    console.log(num);

    const greet=_.once(()=>{
        console.log('hello')
    })
    greet();


 // set header content
  res.setHeader('content-Type','text/html');

 // how to write into browser

//   res.write('<p>hello,ninjas</p>');
//   res.write('<p>hello again,ninjas</p>');
//    res.end();

 let path = './views/';

 switch(req.url){
    case '/':
        path += 'index.html';
        res.statusCode=200;
        break;
    case '/about':
        path += 'about.html';
        res.statusCode=200;
       
        break;

    case 'about-me':
        res.statusCode = 301;
        res.setHeader('Location','/about');
        res.end();
        break;
    default:
        path += '404html';
        res.statusCode=404;

        break;
 }



// send html file

 fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err)
    }
   else {
    // res.write(data);
    // res.end();

    // direct send
    res.end(data);
   }
 })
 
})

server.listen(3000,'localhost',()=>{
    console.log('listening on port 3000')
});