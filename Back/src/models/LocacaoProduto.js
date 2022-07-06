const db = require("./db.js");
const Locacao = require("./Locacao.js");
const Produto = require("./Produto.js");

const LocacaoProduto = db.sequelize.define('locacaoProduto', {
  idLocacao: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: Locacao,
      key: "idLocacao",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  idProduto: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: Produto,
      key: "idProduto",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
})

// LocacaoProduto.sync({force: true});

module.exports = LocacaoProduto;