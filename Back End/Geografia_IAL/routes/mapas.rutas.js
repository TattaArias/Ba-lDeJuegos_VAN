var express = require('express');
var router = express.Router();
const mapas = require ('../controllers/mapas.controller'); 
/**
 * POST - Crear geografía
 */
router.post ('/', mapas.crearMapas);
/**
 * GET - Buscar Todas las geografía
 */
router.get('/', mapas.buscarTodosMapas);
/**
 * GET - Buscar geografía por Id
 */
router.get('/:idMapas', mapas.buscarMapasId);
/**
 * PUT - Editar un geografía por Id
 */
router.put ('/:idMapas', mapas.editarMapasId);
/**
 * DELETE - Borrar un geografía por Id
 */
router.delete ('/:idMapas', mapas.borrarMapasId);

 // Export router
module.exports = router;