module.exports = (sequelize, Sequelize) =>{
    const DatosCuriosos = sequelize.define ("DatosCuriosos", {
        idDatosCuriosos: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        escudo: Sequelize.STRING,
        bandera: Sequelize.STRING,
        himno: Sequelize.STRING,
        video: Sequelize.STRING,
        idPais: Sequelize.INTEGER,
    }, {
        tableName: "datosCuriosos"
    });    
    return DatosCuriosos;
}