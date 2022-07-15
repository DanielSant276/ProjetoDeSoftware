const db = require("./db.js");
const Cliente = require("./Cliente.js");
const Dependente = require("./Dependente.js");

const ClienteDependente = db.sequelize.define("clienteDependente", {
  idCliente: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: Cliente,
      key: "idCliente",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  idDependente: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: Dependente,
      key: "idDependente",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
})

// ClienteDependente.sync({force: true});

module.exports = ClienteDependente;