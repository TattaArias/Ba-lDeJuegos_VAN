module.exports = (sequelize, Sequelize) =>{
    const Paises = sequelize.define ("Paises", {
        idPais: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        nombrePais: Sequelize.STRING,
        idContinente: Sequelize.INTEGER,
        }, {
        tableName: "paises"
    });    
    return Paises;
}
