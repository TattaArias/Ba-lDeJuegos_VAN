module.exports = (sequelize, Sequelize) =>{
    const Geografía = sequelize.define ("Geografía", {
        idGeografía: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        coordenadasGeograficas: Sequelize.STRING,
        meridianosParalelos: Sequelize.STRING,
        corientesMaritimas: Sequelize.STRING,
        desiertos: Sequelize.STRING,
        vulcanismo: Sequelize.STRING,
        islas: Sequelize.STRING,
        placasTectonicas: Sequelize.STRING,
        idPais: Sequelize.INTEGER,
    }, {
        tableName: "geografía"
    });    
    return Geografía;
}
