const express = require('express');
const app = express();
const http = require('http');
const fs =require('fs');

const bodyParser = require('body-parser');
const request = require('request');

const apiKey = '7e671544b1575155536673de63baf975';
//let city = 'Skopje';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    //res.send('Hello world silvi!');
    res.render('index', {weather: null, error: null});
    // const readstream = fs.createReadStream('./index.htm');
    // res.writeHead(200, {'Content-type' : 'text/html'});
    // readstream.pipe(res);
});

// app.post('/', function (req, res) {
//     console.log(req.body.city);
//     res.render('index');  
// });

app.post('/', function (req, res) {

  // console.log(req.body.city);
  // res.render('index');  

   let city = req.body.city;
   let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  //  request(url, function (err, response, body) {
  //   if(err){
  //     console.log('error:', error);
  //   } else {
  //     console.log('body:', body);
  //   }
  // });
  
   request(url, function (err, response, body) {
      if(err){
        res.render('index', {weather: null, error: 'Error, please try again'});
     } else {
       let weather = JSON.parse(body)
       if(weather.main == undefined){
          res.render('index', {weather: null, error: 'Error, please try again'});
       } else {
         let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
         res.render('index', {weather: weatherText, error: null});
        }
      }
    });
  });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  });
//in express framework
//app.get('/example2/:name/:age', (req,res) =>{
   // console.log(req.params);
    //console.log(req.query); // show result in terminal of parametars add in browser tab
   //res.send('example with route param'); //gi prikazuva samo vo terminal
  // res.send(req.params.name + " : " + req.params.age); //gi prikazuva vo browser on localhost url
//});