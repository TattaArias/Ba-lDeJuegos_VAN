module.exports = (sequelize, Sequelize) =>{
    const Continentes = sequelize.define ("Continentes", {
        idContinentes: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        nombreContinente: Sequelize.STRING,
        }, {
        tableName: "continentes"
    });    
    return Continentes;
}
