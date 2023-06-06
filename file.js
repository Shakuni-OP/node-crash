//reading files

const fs = require('fs');

// fs.readFile('./docs/blog.txt',(err,data)=>{
//      if(err){
//         console.log(err)
//      }
//      console.log(data.toString());
// })


// writing
// fs.writeFile('./docs/blog.txt','hello there',()=>{
//     console.log('file is written')
// })

//directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{
//         if(err){
//             console.log(err)
//         }
//     console.log('folder created')
//     })
    
// }
// else {
//     fs.rmdir('./assets',(err)=>{
//       if(err)  console.log(err);
//       console.log('folder deleted')
//     })
// }


// deleting

if(fs.existsSync('./docs/deleteMe.txt')){
   fs.unlink('./docs/deleteMe',(err)=>{
    if(err){
        console.log(err)
    }

    console.log('file deleted')
   })
}
console.log('it is working');