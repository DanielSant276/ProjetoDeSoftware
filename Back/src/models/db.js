const Sequelize = require('sequelize');

const dbName = 'livrariasibd';
const dbUser = 'root';
const dbHost = 'localhost'  
const dbPass = '1234'

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: 'mysql'
})

// exporta o modelo
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
} 

//Verificação de conexão
// sequelize.authenticate().then(function(){
//     console.log("Conectado com sucesso!")
// }).catch(function(erro){
//     console.log("Falha ao se conectar: " + erro)
// })
