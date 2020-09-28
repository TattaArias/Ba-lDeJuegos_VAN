var express = require('express');
var router = express.Router();
const continentes = require ('../controllers/continentes.controller'); 
/**
 * POST - Crear geografía
 */
router.post ('/', continentes.crearContinentes);
/**
 * GET - Buscar Todas las geografía
 */
router.get('/', continentes.buscarTodosContinentes);
/**
 * GET - Buscar geografía por Id
 */
router.get('/:idContinentes', continentes.buscarContinentesId);
/**
 * PUT - Editar un geografía por Id
 */
router.put ('/:idContinentes', continentes.editarContinentesId);
/**
 * DELETE - Borrar un geografía por Id
 */
router.delete ('/:idContinentes', continentes.borrarContinentesId);

 // Export router
module.exports = router;