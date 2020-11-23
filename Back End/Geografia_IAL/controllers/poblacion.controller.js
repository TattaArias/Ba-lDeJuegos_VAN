const dbManager = require ('../database.config/db.manager');

/**
 * POST - Crear un Poblacion
 * @param {*} req 
 * @param {*} res 
 */
async function crearPoblacion (req, res) {
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }    
    // CREATING THE OBJECT TO PERSIST
    const nuevoObjetoPoblacion = {
            idPoblacion: req.body.idPoblacion,
            generalidad: req.body.generalidad,
            region: req.body.region,
            aspectoFisico: req.body.aspectoFisico,
            tendencias: req.body.tendencias,
            idPais: req.body.idPais,
    }
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.Poblacion.create(nuevoObjetoPoblacion).then (
        data => {
            res.send (data);
        }
    ).catch (
        e => {
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
    );
}

/**
 * GET - Buscar Todos los Usuarios
 * @param {*} req 
 * @param {*} res 
 */
async function buscarTodosPoblacion (req, res){
    try {const poblacion = await dbManager.Poblacion.findAll ();//Execute query
        res.json({ data: poblacion });//Send response

    } catch (e) {
        res.status(500).send({message: "Some error occurred"});// Send error message as a response
    }
}

/**
 * GET - Buscar Usuario por Id
 * @param {*} req 
 * @param {*} res 
 */
async function buscarPoblacionId (req, res){
    try {
        const { idPoblacion } = req.params;//Execute query
        const poblacion = await dbManager.Poblacion.findOne({ where: { idPais: idPoblacion } });
        res.json( poblacion );//Send response
    } catch (e) {
        res.status(500).send({message: "Some error occurred"});// Send error message as a response 
    }
}
/**
 * PUT - Editar un Usuario por Id
 * @param {*} req 
 * @param {*} res 
 */
async function editarPoblacionId (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const nuevoObjetoPoblacion = {// CREATING THE OBJECT TO PERSIST
        idPoblacion: req.body.idPoblacion,
        generalidad: req.body.generalidad,
        region: req.body.region,
        aspectoFisico: req.body.aspectoFisico,
        tendencias: req.body.tendencias,
        idPais: req.body.idPais,
    }
    const { idPoblacion } = req.params;//Execute query
    dbManager.Poblacion.update(nuevoObjetoPoblacion, { where: { idPoblacion: idPoblacion } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send ( data ); }
    ).catch (
        e => {
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

/**
 * DELETE - Borrar un Usuario por Id
 * @param {*} req 
 * @param {*} res 
 */
async function borrarPoblacionId (req, res){ 
    const { idPoblacion } = req.params;//Execute query
    dbManager.Poblacion.destroy( { where: { idPoblacion: idPoblacion } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        //data => { res.send (data); }
    .catch (
        e => {
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

exports.crearPoblacion = crearPoblacion ; 
exports.buscarTodosPoblacion = buscarTodosPoblacion ; 
exports.buscarPoblacionId = buscarPoblacionId ; 
exports.editarPoblacionId = editarPoblacionId ;
exports.borrarPoblacionId = borrarPoblacionId ;