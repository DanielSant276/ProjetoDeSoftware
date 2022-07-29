const db = require("./db.js");
const cliente = require("./Cliente.js");
const locacao = require("./locacao.js");

const clienteLocacaoModel = db.sequelize.define('clienteLocacoes', {
  idCliente: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,        
    references: {
      model: cliente.clienteModel,
      key: "idCliente",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  idLocacao: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: locacao.locacaoModel,
      key: "idLocacao",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
})

// ClienteLocacao.sync({force: true});

// Estava dando problema na criação então resolvi comentar tudo
// Mapeando ClienteDependente e Cliente
// clienteLocacaoModel.belongsTo(cliente.clienteModel, {through: "idCliente" } );
// cliente.clienteModel.hasMany(clienteLocacaoModel);

// Mapeando ClienteLocacao e Locacao
// clienteLocacaoModel.hasMany(locacao.locacaoModel);
// locacao.locacaoModel.belongsTo(clienteLocacaoModel, {through: "idLocacao" });

module.exports = {
  clienteLocacaoModel: clienteLocacaoModel
};