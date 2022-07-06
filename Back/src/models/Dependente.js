const db = require("./db.js");

const Dependente = db.sequelize.define('dependente', {
  idDependente: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  depResponsavel: {
    type: db.Sequelize.INTEGER,
    allowNull: false
  },
  depNome: {
    type: db.Sequelize.STRING,
    allowNull: false
  }
})

// Dependente.sync({force: true});

module.exports = Dependente;