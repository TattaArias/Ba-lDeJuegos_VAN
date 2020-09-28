var express = require('express');
var router = express.Router();
const informacionGeneral = require ('../controllers/informacionGeneral.controller'); 
/**
 * POST - Crear geografía
 */
router.post ('/', informacionGeneral.crearInformacionGeneral);
/**
 * GET - Buscar Todas las geografía
 */
router.get('/', informacionGeneral.buscarTodosInformacionGeneral);
/**
 * GET - Buscar geografía por Id
 */
router.get('/:idInformacionGeneral', informacionGeneral.buscarInformacionGeneralId);
/**
 * PUT - Editar un geografía por Id
 */
router.put ('/:idInformacionGeneral', informacionGeneral.editarInformacionGeneralId);
/**
 * DELETE - Borrar un geografía por Id
 */
router.delete ('/:idInformacionGeneral', informacionGeneral.borrarInformacionGeneralId);

 // Export router
module.exports = router;