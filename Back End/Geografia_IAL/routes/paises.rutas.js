var express = require('express');
var router = express.Router();
const paises = require ('../controllers/paises.controller'); 
/**
 * POST - Crear geografía
 */
router.post ('/', paises.crearPaises);
/**
 * GET - Buscar Todas las geografía
 */
router.get('/', paises.buscarTodosPaises);
/**
 * GET - Buscar geografía por Id
 */
router.get('/:idPaises', paises.buscarPaisesId);
/**
 * PUT - Editar un geografía por Id
 */
router.put ('/:idPaises', paises.editarPaisesId);
/**
 * DELETE - Borrar un geografía por Id
 */
router.delete ('/:idPaises', paises.borrarPaisesId);

 // Export router
module.exports = router;