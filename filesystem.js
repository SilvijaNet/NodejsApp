var http = require('http');
var fs = require('fs');
var url = require('url');

var port = 8088;
var server = http.createServer( function(req,res){

    var pathname = url.parse(req.url).pathname;
    console.log(pathname);
    fs.readFile('./Node_tutorial/example.txt', function(err, data){
        console.log(data);
        if(err){
            res.writeHead(200, {'Content-type': 'text/plain'});
            res.end('Welcome to nodejs happend error', pathname);
        }
        console.log('File has been read');
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end(data.toString());
        //res.end('Welcome to nodejs tut', pathname);
    });
    // res.writeHead(200, {'Content-type': 'text/plain'});
    // res.end('Welcome to nodejs tut', pathname);
});

server.listen(port, ()=>{
    console.log('Server litening to port :'+ port);
})