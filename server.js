// var http = require("http");

// http.createServer(function (request, response) {
//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(8082);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');

const http = require('http');
const fs =require('fs');
//const server = http.createServer();
const server = http.createServer((req, res) => {
    console.log('server has started and now working');
    //const readstream = fs.createReadStream('./Node_tutorial/Net4U.png');
    const readstream = fs.createReadStream('./index.htm');
    res.writeHead(200, {'Content-type' : 'text/html'});
    // this is for direct html code but is use only for little code
    // res.write('<!DOCTYPE html>'+
    //     '<html>'+
    //     ' <head>'+
    //     ' <meta charset="utf-8" />'+
    //     ' <title>My Node.js page!</title>'+
    //     ' </head>'+ 
    //     ' <body>'+
    //     ' <p>Here is a paragraph of <strong>HTML</strong>!</p>'+
    //     ' </body>'+
    //     '</html>');
    // res.end();
    readstream.pipe(res);
   /* if(req.url === '/'){
        res.write('Hello world');//moze direkno res.write bez if
        res.end();
    }
    else{
        res.write('using some other domain');
        res.end();
    }
    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }*/
}).listen(3000);

// server.on('connection', (socket) => {
//     console.log('New connection...');
// });

// server.listen(3000); // other way for const server = http.createServer();
// console.log('Listening on port 3000...');
