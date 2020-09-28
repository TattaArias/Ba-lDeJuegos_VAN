//IMPORT SEQUELIZE
const Sequelize = require("sequelize");
//IMPORT SEQUELIZE CONNECTION
const sequelizeConnection = require('../database.config/db.connection.js');
//IMPORT MODELS
const ContinentesModel = require("../model/continentes.model");
const PaisesModel = require("../model/paises.model");
const PoblacionModel = require("../model/poblacion.model");
const InformacionGeneralModel = require("../model/informacionGeneral.model");
const DatosCuriososModel = require("../model/datosCuriosos.model");
const DatosInteresantesModel = require("../model/datosInteresantes.model.");
const GeografíaModel = require("../model/geografía.model");
const MapasModel = require("../model/mapas.model");
//INITIALIZE MODELS
const Continentes = ContinentesModel (sequelizeConnection, Sequelize);
const Paises = PaisesModel (sequelizeConnection, Sequelize);
const Poblacion = PoblacionModel (sequelizeConnection, Sequelize);
const InformacionGeneral = InformacionGeneralModel (sequelizeConnection, Sequelize);
const DatosCuriosos = DatosCuriososModel (sequelizeConnection, Sequelize);
const DatosInteresantes = DatosInteresantesModel (sequelizeConnection, Sequelize);
const Geografía = GeografíaModel (sequelizeConnection, Sequelize);
const Mapas = MapasModel (sequelizeConnection, Sequelize);

//GROUP MODELS
const models = {
  Continentes: Continentes,
  Paises: Paises,
  Poblacion: Poblacion,
  InformacionGeneral: InformacionGeneral,
  DatosCuriosos: DatosCuriosos,
  DatosInteresantes: DatosInteresantes,
  Geografía: Geografía,
  Mapas: Mapas,
};
/**
 * Create object to manage the models and database
 */
const db = {
    ...models,
    sequelizeConnection
};
// EXPORT CONSTANT DB
module.exports = db;

