//fs called fileSystem
const fs = require('fs');


//reading
// fs.readFile('./docs/blog1.txt', (err, data) =>{
//     if(err){
//         console.log(err);
//     }
//                      //output is going to be buffer to string(<Buffer 68 65 6c 6c 6f 2c 20 68 61 6e 73 64 6f 6d 65 21> -> hello, hansdome!)
//     console.log(data.toString());
// });


//writing
//- rewrite
// fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
//     console.log('file was written');
// })
// //when you see the file you defined, it realized content is changed!

// //- create new one
// fs.writeFile('./docs/blog2.txt', 'hello, world again', () => {
//     console.log('file was written');
// })
//when you defined file doesnt exist, it create new one!!


//directing

// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('folder created');
// });
// } else{
//     fs.rmdir('/assets', (err) =>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted');
//     })
// }





//deleting
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) =>{
        if(err){
            console.log(err)
        }
        console.log('file deleted');
    })
}