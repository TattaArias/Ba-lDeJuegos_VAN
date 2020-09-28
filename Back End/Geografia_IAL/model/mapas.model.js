module.exports = (sequelize, Sequelize) =>{
    const Mapas = sequelize.define ("Mapas", {
        idMapas: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        mapaFisico: Sequelize.STRING,
        hidrografia: Sequelize.STRING,
        orografia: Sequelize.STRING,
        mapaPolitico: Sequelize.STRING,
        idPais: Sequelize.INTEGER,
    }, {
        tableName: "mapas"
    });    
    return Mapas;
}
