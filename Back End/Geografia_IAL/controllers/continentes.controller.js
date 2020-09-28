const dbManager = require ('../database.config/db.manager');

/**
 * POST - Crear un Continentes
 * @param {*} req 
 * @param {*} res 
 */
async function crearContinentes (req, res) {
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }    
    // CREATING THE OBJECT TO PERSIST
    const nuevoObjetoContinentes = {
            idContinentes: req.body.idContinentes,
            nombreContinente: req.body.nombreContinente,
    }
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.Continentes.create(nuevoObjetoContinentes).then (
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
async function buscarTodosContinentes (req, res){
    try {const continentes = await dbManager.Continentes.findAll ();//Execute query
        res.json({ data: continentes });//Send response

    } catch (e) {
        res.status(500).send({message: "Some error occurred"});// Send error message as a response
    }
}

/**
 * GET - Buscar Usuario por Id
 * @param {*} req 
 * @param {*} res 
 */
async function buscarContinentesId (req, res){
    try {
        const { idContinentes } = req.params;//Execute query
        const continentes = await dbManager.Continentes.findOne({ where: { idContinentes: idContinentes } });
        res.json( continentes );//Send response
    } catch (e) {
        res.status(500).send({message: "Some error occurred"});// Send error message as a response 
    }
}
/**
 * PUT - Editar un Usuario por Id
 * @param {*} req 
 * @param {*} res 
 */
async function editarContinentesId (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const nuevoObjetoContinentes = {// CREATING THE OBJECT TO PERSIST
        idContinentes: req.body.idContinentes,
        nombreContinente: req.body.nombreContinente,
    }
    const { idContinentes } = req.params;//Execute query
    dbManager.Continentes.update(nuevoObjetoContinentes, { where: { idContinentes: idContinentes } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
async function borrarContinentesId (req, res){ 
    const { idContinentes } = req.params;//Execute query
    dbManager.Continentes.destroy( { where: { idContinentes: idContinentes } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        //data => { res.send (data); }
    .catch (
        e => {
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

exports.crearContinentes = crearContinentes ; 
exports.buscarTodosContinentes = buscarTodosContinentes ; 
exports.buscarContinentesId = buscarContinentesId ; 
exports.editarContinentesId = editarContinentesId ;
exports.borrarContinentesId = borrarContinentesId ;