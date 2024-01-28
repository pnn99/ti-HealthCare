//Conexao com o banco de dados mysql
//sendo nome do banco, usuario e senha
const Sequelize = require('sequelize')
const sequelize = new Sequelize('inter','root','123456',{
    host:"localhost",
    dialect: "mysql",
    port: 3306 // Adicione esta linha se a porta for diferente de 3306
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}