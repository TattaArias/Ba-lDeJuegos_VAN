var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const config = require('./config');
//Importar Las Rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var geografíaRouter = require('./routes/geografía.rutas'); 
//Importar la Conexión de la Base de DATOS
const dbManager = require ("./database.config/db.manager");
var app = express();
app.use(cors(config));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Enrutar
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/geografía', geografíaRouter);
/**
 *  * Testing the connection to the database and recreate the models if the tables doesn´t exists  
 */
dbManager.sequelizeConnection.authenticate()
  .then(() => {
    console.log('****Connection has been established successfully.****');
    dbManager.sequelizeConnection.sync().then(() => { // recreate the models if the tables doesn´t exists
        console.log("Database Synced");
      });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});
module.exports = app;
