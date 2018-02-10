// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
const Sequelize = require("sequelize");
const app = express();
const db = require("./models");
const mysql = require('mysql');
let connection;

// Creates mySQL connection using Sequelize
// const sequelize = new Sequelize("tropical_iventory", "root", "password", {
//   host: "localhost",
//   dialect: "mysql",
//   port: 3300,
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tropical_inventory'

    });
};

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Calamigos2015',
        database: 'tropical_inventory'
    });
};

connection.connect();

global.db = connection;
var PORT = process.env.PORT || 8080;

db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});

// Exports the connection for other files to use
module.exports = sequelize;