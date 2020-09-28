const dbManager = require ('../database.config/db.manager');

/**
 * POST - Crear un DatosInteresantes
 * @param {*} req 
 * @param {*} res 
 */
async function crearDatosInteresantes (req, res) {
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }    
    // CREATING THE OBJECT TO PERSIST
    const nuevoObjetoDatosInteresantes = {
            idDatosInteresantes: req.body.idDatosInteresantes,
            pangea: req.body.pangea,
            sismo: req.body.sismo,
            efectoInvernadero: req.body.efectoInvernadero,
            destruccionCapaDeOzono: req.body.destruccionCapaDeOzono,
            fenomenoNiño: req.body.fenomenoNiño,
            ciclonesTropicales: req.body.ciclonesTropicales,
            saltoDelAngel: req.body.saltoDelAngel,
            canalPanama: req.body.canalPanama,
            id_Pais: req.body.id_Pais,
    }
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.DatosInteresantes.create(nuevoObjetoDatosInteresantes).then (
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
async function buscarTodosDatosInteresantes (req, res){
    try {const datosInteresantes = await dbManager.DatosInteresantes.findAll ();//Execute query
        res.json({ data: datosInteresantes });//Send response

    } catch (e) {
        res.status(500).send({message: "Some error occurred"});// Send error message as a response
    }
}

/**
 * GET - Buscar Usuario por Id
 * @param {*} req 
 * @param {*} res 
 */
async function buscarDatosInteresantesId (req, res){
    try {
        const { idDatosInteresantes } = req.params;//Execute query
        const datosInteresantes = await dbManager.DatosInteresantes.findOne({ where: { idDatosInteresantes: idDatosInteresantes } });
        res.json( datosInteresantes );//Send response
    } catch (e) {
        res.status(500).send({message: "Some error occurred"});// Send error message as a response 
    }
}
/**
 * PUT - Editar un Usuario por Id
 * @param {*} req 
 * @param {*} res 
 */
async function editarDatosInteresantesId (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const nuevoObjetoDatosInteresantes = {// CREATING THE OBJECT TO PERSIST
        idDatosInteresantes: req.body.idDatosInteresantes,
        pangea: req.body.pangea,
        sismo: req.body.sismo,
        efectoInvernadero: req.body.efectoInvernadero,
        destruccionCapaDeOzono: req.body.destruccionCapaDeOzono,
        fenomenoNiño: req.body.fenomenoNiño,
        ciclonesTropicales: req.body.ciclonesTropicales,
        saltoDelAngel: req.body.saltoDelAngel,
        canalPanama: req.body.canalPanama,
        id_Pais: req.body.id_Pais,
    }
    const { idDatosInteresantes } = req.params;//Execute query
    dbManager.DatosInteresantes.update(nuevoObjetoDatosInteresantes, { where: { idDatosInteresantes: idDatosInteresantes } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
async function borrarDatosInteresantesId (req, res){ 
    const { idDatosInteresantes } = req.params;//Execute query
    dbManager.DatosInteresantes.destroy( { where: { idDatosInteresantes: idDatosInteresantes } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        //data => { res.send (data); }
    .catch (
        e => {
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

exports.crearDatosInteresantes = crearDatosInteresantes ; 
exports.buscarTodosDatosInteresantes = buscarTodosDatosInteresantes ; 
exports.buscarDatosInteresantesId = buscarDatosInteresantesId ; 
exports.editarDatosInteresantesId = editarDatosInteresantesId ;
exports.borrarDatosInteresantesId = borrarDatosInteresantesId ;