const dbManager = require ('../database.config/db.manager');

/**
 * POST - Crear un Paises
 * @param {*} req 
 * @param {*} res 
 */
async function crearPaises (req, res) {
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }    
    // CREATING THE OBJECT TO PERSIST
    const nuevoObjetoPaises = {
            idPaises: req.body.idPaises,
            nombrePais: req.body.nombrePais,
            idContinente: req.body.idContinente,
    }
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.Paises.create(nuevoObjetoPaises).then (
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
async function buscarTodosPaises (req, res){
    try {const paises = await dbManager.Paises.findAll ();//Execute query
        res.json({ pata: Paises });//Send response

    } catch (e) {
        res.status(500).send({message: "Some error occurred"});// Send error message as a response
    }
}

/**
 * GET - Buscar Usuario por Id
 * @param {*} req 
 * @param {*} res 
 */
async function buscarPaisesId (req, res){
    try {
        const { idPaises } = req.params;//Execute query
        const paises = await dbManager.Paises.findOne({ where: { idPaises: idPaises } });
        res.json( paises );//Send response
    } catch (e) {
        res.status(500).send({message: "Some error occurred"});// Send error message as a response 
    }
}
/**
 * PUT - Editar un Usuario por Id
 * @param {*} req 
 * @param {*} res 
 */
async function editarPaisesId (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const nuevoObjetoPaises = {// CREATING THE OBJECT TO PERSIST
        idPaises: req.body.idPaises,
        coordenadasGeograficas: req.body.coordenadasGeograficas,
        meridianosParalelos: req.body.meridianosParalelos,
        corientesMaritimas: req.body.corientesMaritimas,
        desiertos: req.body.desiertos,
        vulcanismo: req.body.vulcanismo,
        islas: req.body.islas,
        placasTectonicas: req.body.placasTectonicas,
        id_Pais: req.body.id_Pais,
    }
    const { idPaises } = req.params;//Execute query
    dbManager.Paises.update(nuevoObjetoPaises, { where: { idPaises: idPaises } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
async function borrarPaisesId (req, res){ 
    const { idPaises } = req.params;//Execute query
    dbManager.Paises.destroy( { where: { idPaises: idPaises } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        //data => { res.send (data); }
    .catch (
        e => {
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

exports.crearPaises = crearPaises ; 
exports.buscarTodosPaises = buscarTodosPaises ; 
exports.buscarPaisesId = buscarPaisesId ; 
exports.editarPaisesId = editarPaisesId ;
exports.borrarPaisesId = borrarPaisesId ;