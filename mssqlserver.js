var express = require('express');
var app = express();
var sql = require("mssql");

const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
const Sequelize = require('sequelize');
const fs = require('fs');

const config = {
  user: 'NetForYou',
  password: 'silviNetForYou',
  server: 'localhost', // You can use 'localhost\\instance' to connect to named instance 
  database: 'EDelovodnik',
  options: {
      dialect: 'mssql',
      //host: 'localhost\\SQLEXPRESS01',
      instanceName: 'SQLEXPRESS01'
  }
    //database: 'EDelovodnik'
    //port:5000
};

// const connection = new Connection(config);

// connection.on('connect', function(err) {
//   if (err) {
//     console.log(err + 'Not connected');
//   } else {
//     console.log('Connected');
//   }
// });

// fs
//   .readdirSync(__dirname)
//   .filter((file) =>
//      file !== 'index.js'
//   )
//   .forEach((file) =>{
//       const model = sequelize.import(path.join(__dirname, file))
//       db[model.name] = model
//   })

//   const sequelize = new Sequelize(
//     config.database,
//     config.user,
//     config.password,
//     config.options
// )

//   db.sequelize = sequelize;
//   db.Sequelize = Sequelize; 

// function getEmp() {
    
//   sql.connect(config, function (err) {
    

//         if(err) {
//             console.log(err);
//             return;
//         }
//         var req = new sql.Request();
//         request.query('select * from customer', function (err, recordset) {

//             if (err) console.log(err)
//             else{
//                 console.log(recordset);
//             }
//             //conn.close();
//         });
//     // else {
//     //     console.log('success');
//     // }
// });
// }

// getEmp();

// const sql = require('mssql')

// app.get('/', function (req, res) {
// async () => {
//     try {
//         await sql.connect('mssql://NetForYou:silviNetForYou@localhost/Edelovodnik')
//         const result = await sql.query`select * from customer where id = ${value}`
//         console.dir(result)
//     } catch (err) {
//         // ... error checks
//         console.log('Errors')
//     }
// }
// });

// app.get('/', function (req, res) {
// // connect to your database
// sql.connect(dbconfig, function (err) {

//     if (err) console.log(err);

//     // create Request object
//     var request = new sql.Request();

//     // query to the database and get the records
//     request.query('select * from customer', function (err, recordset) {

//         if (err) console.log(err)

//         // send records as a response
//         res.send(recordset);
//         console.log(recordset);
        
//     });
// }); sql.close();
// });

//new code 
//const Sequelize = require('sequelize');

//app.get('/', function (req, res) {
// Option 1: Passing parameters separately
const sequelize = new Sequelize('Edelovodnik', 'NetForYou', 'silviNetForYou', {
  host: 'localhost',
  dialect: 'mssql'
});
//})

//najnovo
//var Connection = require('tedious').Connection; 
//var Request = require('tedious').Request; 
// var tedious = require('tedious')
 
// var dbconfig = { 
//     userName: "NetForYou", 
//     password: "silviNetForYou", 
//     server: "localhost",
//     options: { 
//         database: "EDelovodnik", 
//         instanceName: 'SQLEXPRESS01',
//         encrypt: true, 
//     } 
// }; 
 
// var connection = new tedious.Connection(dbconfig); 
// connection.on("connect",function(err){ 
//     var result = []; 
 
//     var request = new Request("select * form customer",function(err,count,rows){ 
//         console.log(result); 
//     }); 
//     request.on("row", function (columns) { 
//         var item = {}; 
//         columns.forEach(function (column) { 
//             item[column.metadata.colName] = column.value; 
//         }); 
//         result.push(item); 
//     }); 
// }) 


// app.get('/', function (req, res) {
   
//     var sql = require("mssql");

//     // config for your database
//     var config = {
//         user: 'NetForYou',
//         password: 'silviNetForYou',
//         server: 'MSSQL14.SQLEXPRESS01', 
//         database: 'EDelovodnik' 
//     };

//     // connect to your database
//     sql.connect(config, function (err) {
    
//         if (err) console.log(err);

//         // create Request object
//         var request = new sql.Request();
           
//         // query to the database and get the records
//         request.query('select * from customer', function (err, recordset) {
            
//             if (err) console.log(err)

//             // send records as a response
//             res.send(recordset);
            
//         });
//     });
// });

var server = app.listen(5000, function () {
    console.log('Server is running..');
});