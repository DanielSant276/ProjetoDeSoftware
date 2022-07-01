const db = require("./db.js");
const Cliente = require("./Cliente.js");
const Locacao = require("./Locacao.js");

const ClienteLocacao = db.sequelize.define('clienteLocacao', {
  idCliente: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,        
    references: {
      model: Cliente,
      key: "idCliente",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  idLocacao: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: Locacao,
      key: "idLocacao",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
})

// ClienteLocacao.sync({force: true});

module.exports = ClienteLocacao;