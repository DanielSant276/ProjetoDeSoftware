const db = require("./db.js");

const exemplarModel = db.sequelize.define('exemplar', {
  idExemplar: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  exemplarCodigo: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})

// Exemplar.sync({force: true});

module.exports = {
  exemplarModel
};