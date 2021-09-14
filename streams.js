const fs = require('fs');
//when you road website, sometimes it takes time. so we use strem. 
//it something like shown the browser but not evrything, like picture is still not loading but they can see some contents. 

const readStream = fs.createReadStream('./docs/blog3.txt');
const writeStream = fs.createWriteStream('./docs/blog4.txt');



// readStream.on('data', (chunk) =>{
//     //output to console
//     console.log('------NEW CHUNK ------');
//     console.log(chunk);
//     //create file
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);