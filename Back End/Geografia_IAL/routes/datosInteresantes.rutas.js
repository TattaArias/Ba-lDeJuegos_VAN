var express = require('express');
var router = express.Router();
const datosInteresantes = require ('../controllers/datosInteresantes.controller'); 
/**
 * POST - Crear geografía
 */
router.post ('/', datosInteresantes.crearDatosInteresantes);
/**
 * GET - Buscar Todas las geografía
 */
router.get('/', datosInteresantes.buscarTodosDatosInteresantes);
/**
 * GET - Buscar geografía por Id
 */
router.get('/:idDatosInteresantes', datosInteresantes.buscarDatosInteresantesId);
/**
 * PUT - Editar un geografía por Id
 */
router.put ('/:idDatosInteresantes', datosInteresantes.editarDatosInteresantesId);
/**
 * DELETE - Borrar un geografía por Id
 */
router.delete ('/:idDatosInteresantes', datosInteresantes.borrarDatosInteresantesId);

 // Export router
module.exports = router;