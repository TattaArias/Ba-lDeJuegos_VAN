var express = require('express');
var router = express.Router();
const geografía = require ('../controllers/geografía.controller'); 
/**
 * POST - Crear geografía
 */
router.post ('/', geografía.crearGeografía);
/**
 * GET - Buscar Todas las geografía
 */
router.get('/', geografía.buscarTodosGeografía);
/**
 * GET - Buscar geografía por Id
 */
router.get('/:idGeografía', geografía.buscarGeografíaId);
/**
 * PUT - Editar un geografía por Id
 */
router.put ('/:idGeografía', geografía.editarGeografíaId);
/**
 * DELETE - Borrar un geografía por Id
 */
router.delete ('/:idGeografía', geografía.borrarGeografíaId);

 // Export router
module.exports = router;