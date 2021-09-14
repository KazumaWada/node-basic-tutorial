// in browser JSON, its window insted of global right?
// console.log(global);

//as soon as when it hit 3s, int(look below method) gonna quit.
global.setTimeout(() => {
    console.log('in the timeout'); 
    clearInterval(int);
}, 3000);

//this method is just logged every 1 sec
const int = setInterval(() =>{
    console.log('in the interval')
}, 1000);

console.log(__dirname);//rootFile
console.log(__filename);//currentFile