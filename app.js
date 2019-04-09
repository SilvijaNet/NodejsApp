// console.log('Hello world from node js');

// const tutorial = require('./tutorial');
// console.log(tutorial);
// console.log(tutorial.sum(1,7));

function sayHello(name){
    console.log('Hello ' + name);
}

sayHello('Silvi');
//console.log(window); error fow not defined window
//console.log(module);

const logger = require('./tutorial'); //better to define const then var for overwrite
logger.log('message');
//logger('message'); for single function can call on this way
const path = require('path');
var pathobj = path.parse(__filename);
console.log(pathobj);

const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log('Total Memory' + totalMemory);
//other way
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

const fs = require('fs');
// const files = fs.readdirSync('./');
// //console.log(files);
// //other way
// fs.readdir('./', function(err,files) {
//     if(err) console.log('Error', err);
//     else console.log('Result', files);
// });

// fs.mkdir('Node_tutorial', (err) => {
//     if(err) console.log(err);
//     else console.log('Folder was succesfully added.');
// });
//fs.writeFile('./Node_tutorial/example.txt', '123fdnjj', (err)) za kreiranje fail vo folderot
const zlib = require('zlib');
const gzip = zlib.createGzip(); //createGunzip for uzip file
//stream is usefull for situation when we have large file
const readstream = fs.createReadStream('./Node_tutorial/example.txt', 'utf8');
const writestream = fs.createWriteStream('example2.txt.gz');
// readstream.on('data', (chunk) => {
//      //console.log(chunk); //for read file
//      writestream.write(chunk); //for write text in file
// });
//other way for write file txt
readstream.pipe(gzip).pipe(writestream);

const _ = require('lodash');
let example = _.fill([1,2,3,4,5], "banana", 1,3);
console.log(example);



