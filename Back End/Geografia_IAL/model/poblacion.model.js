module.exports = (sequelize, Sequelize) =>{
    const Poblacion = sequelize.define ("Poblacion", {
        idPoblacion: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        generalidad: Sequelize.STRING,
        region: Sequelize.STRING,
        aspectoFisico: Sequelize.STRING,
        tendencias: Sequelize.STRING,
        idPais: Sequelize.INTEGER,
    }, {
        tableName: "poblacion"
    });    
    return Poblacion;
}
