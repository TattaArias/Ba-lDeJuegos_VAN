//IMPORT SEQUELIZE
const Sequelize = require("sequelize");
//IMPORT SEQUELIZE CONNECTION
const sequelizeConnection = require('../database.config/db.connection.js');
//IMPORT MODELS
const GeografíaModel = require("../model/geografía.model");
//INITIALIZE MODELS
const Geografía = GeografíaModel (sequelizeConnection, Sequelize);

//GROUP MODELS
const models = {
  Geografía: Geografía,
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