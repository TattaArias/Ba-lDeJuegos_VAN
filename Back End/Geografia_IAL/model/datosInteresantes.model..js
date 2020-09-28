module.exports = (sequelize, Sequelize) =>{
    const DatosInteresantes = sequelize.define ("DatosInteresantes", {
        idDatosInteresantes: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        pangea: Sequelize.STRING,
        sismo: Sequelize.STRING,
        efectoInvernadero: Sequelize.STRING,
        destruccionCapaDeOzono: Sequelize.STRING,
        fenomenoNiño: Sequelize.STRING,
        ciclonesTropicales: Sequelize.STRING,
        saltoDelAngel: Sequelize.STRING,
        canalPanama: Sequelize.STRING,
        idPais: Sequelize.INTEGER,
    }, {
        tableName: "datosInteresantes"
    });    
    return DatosInteresantes;
}
