var express = require('express');
var router = express.Router();
const datosCuriosos = require ('../controllers/datosCuriosos.controller'); 
/**
 * POST - Crear geografía
 */
router.post ('/', datosCuriosos.crearDatosCuriosos);
/**
 * GET - Buscar Todas las geografía
 */
router.get('/', datosCuriosos.buscarTodosDatosCuriosos);
/**
 * GET - Buscar geografía por Id
 */
router.get('/:idDatosCuriosos', datosCuriosos.buscarDatosCuriososId);
/**
 * PUT - Editar un geografía por Id
 */
router.put ('/:idDatosCuriosos', datosCuriosos.editarDatosCuriososId);
/**
 * DELETE - Borrar un geografía por Id
 */
router.delete ('/:idDatosCuriosos', datosCuriosos.borrarDatosCuriososId);

 // Export router
module.exports = router;