const db = require("./db.js");

const generoModel = db.sequelize.define('genero', {
  idGenero: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  nome: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})

// Genero.sync({force: true});

module.exports = {
  generoModel
};