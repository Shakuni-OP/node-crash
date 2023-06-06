
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

    console.log(req.url,req.method)

 let path = './views'
 switch(req.url){
  
    case '/':
        path += 'index.html'
        break;
        case '/about':
            path += 'about.html'
            break;
           
            default:
                path +='404.html'
                break;


 }



    // setHeader content type
    res.setHeader('content-type','text/html')

    //read a html file
     fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
            res.end();
        }
        // send that file's data
        else {res.write(data);
            req.end();
        }
     })
    
});

server.listen(3000,'localhost',()=>{
    console.log('listening for requests on port 3000')
})

