const dbManager = require ('../database.config/db.manager');

/**
 * POST - Crear un InformacionGeneral
 * @param {*} req 
 * @param {*} res 
 */
async function crearInformacionGeneral (req, res) {
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }    
    // CREATING THE OBJECT TO PERSIST
    const nuevoObjetoInformacionGeneral = {
            idInformacionGeneral: req.body.idInformacionGeneral,
            generalidad: req.body.generalidad,
            breveHistoria: req.body.breveHistoria,
            demografia: req.body.demografia,
            gobierno: req.body.gobierno,
            economia: req.body.economia,
            cultura: req.body.cultura,
            id_Pais: req.body.id_Pais,
    }
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.InformacionGeneral.create(nuevoObjetoInformacionGeneral).then (
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
async function buscarTodosInformacionGeneral (req, res){
    try {const informacionGeneral = await dbManager.InformacionGeneral.findAll ();//Execute query
        res.json({ data: informacionGeneral });//Send response

    } catch (e) {
        res.status(500).send({message: "Some error occurred"});// Send error message as a response
    }
}

/**
 * GET - Buscar Usuario por Id
 * @param {*} req 
 * @param {*} res 
 */
async function buscarInformacionGeneralId (req, res){
    try {
        const { idInformacionGeneral } = req.params;//Execute query
        const informacionGeneral = await dbManager.InformacionGeneral.findOne({ where: { idPais: idInformacionGeneral } });
        res.json( informacionGeneral );//Send response
    } catch (e) {
        res.status(500).send({message: "Some error occurred"});// Send error message as a response 
    }
}
/**
 * PUT - Editar un Usuario por Id
 * @param {*} req 
 * @param {*} res 
 */
async function editarInformacionGeneralId (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const nuevoObjetoInformacionGeneral = {// CREATING THE OBJECT TO PERSIST
        idInformacionGeneral: req.body.idInformacionGeneral,
        generalidad: req.body.generalidad,
        breveHistoria: req.body.breveHistoria,
        demografia: req.body.demografia,
        gobierno: req.body.gobierno,
        economia: req.body.economia,
        cultura: req.body.cultura,
        id_Pais: req.body.id_Pais,
    }
    const { idInformacionGeneral } = req.params;//Execute query
    dbManager.InformacionGeneral.update(nuevoObjetoInformacionGeneral, { where: { idInformacionGeneral: idInformacionGeneral } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
async function borrarInformacionGeneralId (req, res){ 
    const { idInformacionGeneral } = req.params;//Execute query
    dbManager.InformacionGeneral.destroy( { where: { idInformacionGeneral: idInformacionGeneral } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        //data => { res.send (data); }
    .catch (
        e => {
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

exports.crearInformacionGeneral = crearInformacionGeneral ; 
exports.buscarTodosInformacionGeneral = buscarTodosInformacionGeneral ; 
exports.buscarInformacionGeneralId = buscarInformacionGeneralId ; 
exports.editarInformacionGeneralId = editarInformacionGeneralId ;
exports.borrarInformacionGeneralId = borrarInformacionGeneralId ;