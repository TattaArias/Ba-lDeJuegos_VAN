const dbManager = require ('../database.config/db.manager');

/**
 * POST - Crear un geografía
 * @param {*} req 
 * @param {*} res 
 */
async function crearGeografía (req, res) {
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }    
    // CREATING THE OBJECT TO PERSIST
    const nuevoObjetoGeografía = {
            idGeografía: req.body.idGeografía,
            coordenadasGeograficas: req.body.coordenadasGeograficas,
            meridianosParalelos: req.body.meridianosParalelos,
            corientesMaritimas: req.body.corientesMaritimas,
            desiertos: req.body.desiertos,
            vulcanismo: req.body.vulcanismo,
            islas: req.body.islas,
            placasTectonicas: req.body.placasTectonicas,
            id_Pais: req.body.id_Pais,
    }
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.Geografía.create(nuevoObjetoGeografía).then (
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
async function buscarTodosGeografía (req, res){
    try {const geografía = await dbManager.Geografía.findAll ();//Execute query
        res.json({ data: geografía });//Send response

    } catch (e) {
        res.status(500).send({message: "Some error occurred"});// Send error message as a response
    }
}

/**
 * GET - Buscar Usuario por Id
 * @param {*} req 
 * @param {*} res 
 */
async function buscarGeografíaId (req, res){
    try {
        const { idGeografía } = req.params;//Execute query
        const geografía = await dbManager.Geografía.findOne({ where: { idPais: idGeografía } });
        res.json( geografía );//Send response
    } catch (e) {
        res.status(500).send({message: "Some error occurred"});// Send error message as a response 
    }
}
/**
 * PUT - Editar un Usuario por Id
 * @param {*} req 
 * @param {*} res 
 */
async function editarGeografíaId (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const nuevoObjetoGeografía = {// CREATING THE OBJECT TO PERSIST
        idGeografía: req.body.idGeografía,
        coordenadasGeograficas: req.body.coordenadasGeograficas,
        meridianosParalelos: req.body.meridianosParalelos,
        corientesMaritimas: req.body.corientesMaritimas,
        desiertos: req.body.desiertos,
        vulcanismo: req.body.vulcanismo,
        islas: req.body.islas,
        placasTectonicas: req.body.placasTectonicas,
        id_Pais: req.body.id_Pais,
    }
    const { idGeografía } = req.params;//Execute query
    dbManager.Geografía.update(nuevoObjetoGeografía, { where: { idGeografía: idGeografía } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
async function borrarGeografíaId (req, res){ 
    const { idGeografía } = req.params;//Execute query
    dbManager.Geografía.destroy( { where: { idGeografía: idGeografía } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        //data => { res.send (data); }
    .catch (
        e => {
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

exports.crearGeografía = crearGeografía ; 
exports.buscarTodosGeografía = buscarTodosGeografía ; 
exports.buscarGeografíaId = buscarGeografíaId ; 
exports.editarGeografíaId = editarGeografíaId ;
exports.borrarGeografíaId = borrarGeografíaId ;