const db = require("./db.js");
const locacao = require("./Locacao.js");
const produto = require("./produto.js");

const locacaoProdutoModel = db.sequelize.define('locacaoProduto', {
  idLocacao: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: locacao.locacaoModel,
      key: "idLocacao",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  idProduto: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: produto.produtoModel,
      key: "idProduto",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
})

// LocacaoProduto.sync({force: true});

// Não estou confiante desses dois, espero que não de problema
// Mapeando LocacaoDependente e Locacao
locacaoProdutoModel.belongsTo(locacao.locacaoModel, {through: "idLocacao" } );
locacao.locacaoModel.hasMany(locacaoProdutoModel);

// Mapeando LocacaoProduto e Produto
locacaoProdutoModel.hasMany(produto.produtoModel);
produto.produtoModel.belongsTo(locacaoProdutoModel, {through: "idProduto" });

module.exports = {
  locacaoProdutoModel
};