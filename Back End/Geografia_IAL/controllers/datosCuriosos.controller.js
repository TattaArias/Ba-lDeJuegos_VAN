const dbManager = require ('../database.config/db.manager');

/**
 * POST - Crear un DatosCuriosos
 * @param {*} req 
 * @param {*} res 
 */
async function crearDatosCuriosos (req, res) {
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }    
    // CREATING THE OBJECT TO PERSIST
    const nuevoObjetoDatosCuriosos = {
            idDatosCuriosos: req.body.idDatosCuriosos,
            escudo: req.body.escudo,
            bandera: req.body.bandera,
            himno: req.body.himno,
            video: req.body.video,
            id_Pais: req.body.id_Pais,
    }
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.DatosCuriosos.create(nuevoObjetoDatosCuriosos).then (
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
async function buscarTodosDatosCuriosos (req, res){
    try {const datosCuriosos = await dbManager.DatosCuriosos.findAll ();//Execute query
        res.json({ data: datosCuriosos });//Send response

    } catch (e) {
        res.status(500).send({message: "Some error occurred"});// Send error message as a response
    }
}

/**
 * GET - Buscar Usuario por Id
 * @param {*} req 
 * @param {*} res 
 */
async function buscarDatosCuriososId (req, res){
    try {
        const { idDatosCuriosos } = req.params;//Execute query
        const datosCuriosos = await dbManager.DatosCuriosos.findOne({ where: { idDatosCuriosos: idDatosCuriosos } });
        res.json( datosCuriosos );//Send response
    } catch (e) {
        res.status(500).send({message: "Some error occurred"});// Send error message as a response 
    }
}
/**
 * PUT - Editar un Usuario por Id
 * @param {*} req 
 * @param {*} res 
 */
async function editarDatosCuriososId (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const nuevoObjetoDatosCuriosos = {// CREATING THE OBJECT TO PERSIST
        idDatosCuriosos: req.body.idDatosCuriosos,
        escudo: req.body.escudo,
        bandera: req.body.bandera,
        himno: req.body.himno,
        video: req.body.video,
        id_Pais: req.body.id_Pais,
}
    const { idDatosCuriosos } = req.params;//Execute query
    dbManager.DatosCuriosos.update(nuevoObjetoDatosCuriosos, { where: { idDatosCuriosos: idDatosCuriosos } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
async function borrarDatosCuriososId (req, res){ 
    const { idDatosCuriosos } = req.params;//Execute query
    dbManager.DatosCuriosos.destroy( { where: { idDatosCuriosos: idDatosCuriosos } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        //data => { res.send (data); }
    .catch (
        e => {
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

exports.crearDatosCuriosos = crearDatosCuriosos ; 
exports.buscarTodosDatosCuriosos = buscarTodosDatosCuriosos ; 
exports.buscarDatosCuriososId = buscarDatosCuriososId ; 
exports.editarDatosCuriososId = editarDatosCuriososId ;
exports.borrarDatosCuriososId = borrarDatosCuriososId ;