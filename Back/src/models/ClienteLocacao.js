const db = require("./db.js");
const cliente = require("./Cliente.js");
const locacao = require("./locacao.js");

const clienteLocacaoModel = db.sequelize.define('clienteLocacao', {
  idCliente: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,        
    references: {
      model: cliente,
      key: "idCliente",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  idLocacao: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: locacao,
      key: "idLocacao",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
})

// ClienteLocacao.sync({force: true});

// Não estou confiante desses dois, espero que não de problema
// Mapeando ClienteDependente e Cliente
clienteLocacaoModel.belongsTo(cliente.clienteModel, {through: "idCliente" } );
cliente.clienteModel.hasMany(clienteLocacaoModel);

// Mapeando ClienteLocacao e Locacao
clienteLocacaoModel.hasMany(locacao.locacaoModel);
locacao.locacaoModel.belongsTo(clienteLocacaoModel, {through: "idLocacao" });

module.exports = {
  clienteLocacaoModel
};