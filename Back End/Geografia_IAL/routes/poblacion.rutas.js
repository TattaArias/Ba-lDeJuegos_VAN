var express = require('express');
var router = express.Router();
const poblacion = require ('../controllers/poblacion.controller'); 
/**
 * POST - Crear geografía
 */
router.post ('/', poblacion.crearPoblacion);
/**
 * GET - Buscar Todas las geografía
 */
router.get('/', poblacion.buscarTodosPoblacion);
/**
 * GET - Buscar geografía por Id
 */
router.get('/:idPoblacion', poblacion.buscarPoblacionId);
/**
 * PUT - Editar un geografía por Id
 */
router.put ('/:idPoblacion', poblacion.editarPoblacionId);
/**
 * DELETE - Borrar un geografía por Id
 */
router.delete ('/:idPoblacion', poblacion.borrarPoblacionId);

 // Export router
module.exports = router;