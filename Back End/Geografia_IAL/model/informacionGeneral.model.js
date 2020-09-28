module.exports = (sequelize, Sequelize) =>{
    const informacionGeneral = sequelize.define ("informacionGeneral", {
        idInformacionGeneral: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        generalidad: Sequelize.STRING,
        breveHistoria: Sequelize.STRING,
        demografia: Sequelize.STRING,
        gobierno: Sequelize.STRING,
        economia: Sequelize.STRING,
        cultura: Sequelize.STRING,
        idPais: Sequelize.INTEGER,
    }, {
        tableName: "informacionGeneral"
    });    
    return informacionGeneral;
}
