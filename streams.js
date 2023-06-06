
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt',{encoding:'utf8'})
const writeStream = fs.createWriteStream('./docs/blocg5.txt');
console.log('stream is working');

// readStream.on('data',(chunk)=>{

//     console.log('----@@@@@@@@@@@@New Chunk@@@@@@@@@@@@@@@----');
//     console.log(chunk)

//     writeStream.write('\nNew CHUNK\n');
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);
