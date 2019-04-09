// const Connection = require('tedious').Connection;
// const Request = require('tedious').Request;

// const config = {
//     userName: 'NetForYou', // update
//     password: 'silviNetForYou', // update
//     server: 'localhost',
//     database: 'EDelovodnik', // update
//     options: {
//         instanceName: 'SQLEXPRESS01',
//         dialect: 'mssql'
//     }
//   }

//   const connection = new Connection(config);

// connection.on('connect', function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Connected');
//   }
// });

const Sequelize = require('sequelize');

//const sequelize = new Sequelize('mssql://user:pass@example.com:5432/dbname');
// Option 1: Passing parameters separately
const sequelize = new Sequelize('NodeTestDB', 'NetForYou', 'silviNetForYou', {
    host: 'localhost',
    instanceName: 'SQLEXPRESS01',
    dialect: 'mssql'
});

// module.exports = (sequelize, DataTypes) =>
// sequelize.define('Customer', {
//     email: {
//         type: DataTypes.STRING,
//         unique: true
//     },
//     password: DataTypes.STRING
// })

// Customer.init({
    
// }, { sequelize });

class Person extends Sequelize.Model {}
Person.init({
  username: Sequelize.STRING,
  birthday: Sequelize.DATE,
  city: Sequelize.STRING
}, { sequelize });

//this is second way for define new table in DB
const Product = sequelize.define('product', {
  // attributes
  ProductName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  ProductPrice: {
    type: Sequelize.FLOAT
    // allowNull defaults to true
  },
  ProductDescription: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  // options
});

//second way to create table data
// Product.sync({ force: true }).then(() => {
//   // Now the `users` table in the database corresponds to the model definition
//   return Product.create({
//     ProductName: 'Bananas',
//     ProductPrice: '70',
//     ProductDescription: ''
//   });
// });

// sequelize.sync()
//   .then(() => Person.create({
//     username: 'Silvija',
//     birthday: new Date(1990, 7, 25),
//     city: 'Skopje'
//   }))
//   .then(silvi => {
//     console.log(silvi.toJSON());
//   });

//   Person.findAll({
//     attributes: ['username', 'birthday']
//   });

// Create a new user
// Person.create({ username: "Jane", birthday: new Date(1980, 6, 23), city: "Skopje" }).then(jane => {
//     console.log("Jane's auto-generated ID:", jane.id);
//   });

// Update
// Person.update({ city: "Bitola" }, {
//   where: {
//     username: "Jane"
//   }
// }).then(() => {
//   console.log("Done");
// });

  Person.findAll().then(persons => {
    console.log("All persons:", JSON.stringify(persons, null, 4));//this works to show all data from table Person 
  });

  Product.findAll().then(products => {
    console.log("All products:", JSON.stringify(products, null, 4));//this works to show all data from table Person 
  });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Option 2: Using a connection URI
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

