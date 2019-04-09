const sum = (num1,num2) => num1 + num2;

function log(message){
    console.log(message);
}
module.exports.sum = sum;
module.exports.log = log;

// var fs = require('fs');
// //async way to read file
// fs.readFile('./Node_tutorial/example.txt', function(err,data){
//     if(err) console.log('Error happend during read file');
//     setTimeout( ()=>{
//         console.log(data.toString());
//     }, 1000);
// });
// console.log('End real file');
//sync
//  var data = fs.readFileSync('./Node_tutorial/example.txt');
//  console.log(data.toString());
//  console.log('End real file');