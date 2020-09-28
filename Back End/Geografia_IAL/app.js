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
var continentesRouter = require('./routes/continentes.rutas');
var paisesRouter = require('./routes/paises.rutas');
var poblacionRouter = require('./routes/poblacion.rutas');
var informacionGeneralRouter = require('./routes/informacionGeneral.rutas');
var datosCuriososRouter = require('./routes/datosCuriosos.rutas');
var datosInteresantesRouter = require('./routes/datosInteresantes.rutas');
var geografíaRouter = require('./routes/geografía.rutas'); 
var mapasRouter = require('./routes/mapas.rutas');

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
app.use('/continentes', continentesRouter);
app.use('/paises', paisesRouter);
app.use('/poblacion', poblacionRouter);
app.use('/informacionGeneral', informacionGeneralRouter);
app.use('/datosCuriosos', datosCuriososRouter);
app.use('/datosInteresantes', datosInteresantesRouter);
app.use('/geografía', geografíaRouter);
app.use('/mapas', mapasRouter);

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
