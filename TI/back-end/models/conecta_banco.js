// conecta_banco.js
const Sequelize = require('sequelize');
const sequelize = new Sequelize('inter', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    query: { raw: true }
});

// Exportando o Sequelize e o sequelize
module.exports = {
    Sequelize,
    sequelize
};