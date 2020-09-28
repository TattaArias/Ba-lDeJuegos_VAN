const dbManager = require ('../database.config/db.manager');

/**
 * POST - Crear un Mapas
 * @param {*} req 
 * @param {*} res 
 */
async function crearMapas (req, res) {
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }    
    // CREATING THE OBJECT TO PERSIST
    const nuevoObjetoMapas = {
            idMapas: req.body.idMapas,
            mapaFisico: req.body.mapaFisico,
            hidrografia: req.body.hidrografia,
            orografia: req.body.orografia,
            mapaPolitico: req.body.mapaPolitico,
            id_Pais: req.body.id_Pais,
    }
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.Mapas.create(nuevoObjetoMapas).then (
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
async function buscarTodosMapas (req, res){
    try {const mapas = await dbManager.Mapas.findAll ();//Execute query
        res.json({ data: mapas });//Send response

    } catch (e) {
        res.status(500).send({message: "Some error occurred"});// Send error message as a response
    }
}

/**
 * GET - Buscar Usuario por Id
 * @param {*} req 
 * @param {*} res 
 */
async function buscarMapasId (req, res){
    try {
        const { idMapas } = req.params;//Execute query
        const mapas = await dbManager.Mapas.findOne({ where: { idMapas: idMapas } });
        res.json( mapas );//Send response
    } catch (e) {
        res.status(500).send({message: "Some error occurred"});// Send error message as a response 
    }
}
/**
 * PUT - Editar un Usuario por Id
 * @param {*} req 
 * @param {*} res 
 */
async function editarMapasId (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const nuevoObjetoMapas = {// CREATING THE OBJECT TO PERSIST
        idMapas: req.body.idMapas,
        mapaFisico: req.body.mapaFisico,
        hidrografia: req.body.hidrografia,
        orografia: req.body.orografia,
        mapaPolitico: req.body.mapaPolitico,
        id_Pais: req.body.id_Pais,
    }
    const { idMapas } = req.params;//Execute query
    dbManager.Mapas.update(nuevoObjetoMapas, { where: { idMapas: idMapas } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
async function borrarMapasId (req, res){ 
    const { idMapas } = req.params;//Execute query
    dbManager.Mapas.destroy( { where: { idMapas: idMapas } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        //data => { res.send (data); }
    .catch (
        e => {
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

exports.crearMapas = crearMapas ; 
exports.buscarTodosMapas = buscarTodosMapas ; 
exports.buscarMapasId = buscarMapasId ; 
exports.editarMapasId = editarMapasId ;
exports.borrarMapasId = borrarMapasId ;