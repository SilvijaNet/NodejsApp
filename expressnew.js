var express = require('express');
var app = express();
var port = '8089';

app.get('/', function(req, res){
    res.send(200, {data: 'success'});
});
app.put('/', function(req, res){
    res.send(200, {data: 'success'});
})
app.post('/', function(req, res){
    res.send(200, {data: 'success'});
})

app.listen(port, '127.0.0.1', function(){
    console.log('Server listening at port ' + port);
});

app.get('/newUser', (req, res) => {
    let username = req.query.username || '';
    const password = req.query.password || '';
  
    username = username.replace(/[!@#$%^&*]/g, '');
  
    if (!username || !password || users.username) {
      return res.send(400, {data: 'error'});
      //res.sendStatus(400);
    }
  
    const salt = crypto.randomBytes(128).toString('base64');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');
  
    users[username] = { salt, hash };
    res.send(200, {data: 'success'});
    //res.sendStatus(200);
  });