const db = require("./db.js");
const produto = require("./Produto.js");
const exemplar = require("./Exemplar.js");

const produtoExemplarModel = db.sequelize.define('produtoExemplar', {
  idProduto: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: produto.produtoModel,
      key: "idProduto",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  idExemplar: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: exemplar.exemplarModel,
      key: "idExemplar",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
})

// ProdutoExemplar.sync({force: true});

// Não estou confiante desses dois, espero que não de problema
// Mapeando ProdutoExemplar e Produto
produtoExemplarModel.belongsTo(produto.produtoModel, {through: "idProduto" } );
produto.produtoModel.hasMany(produtoExemplarModel);

// Mapeando ProdutoExemplar e Exemplar
produtoExemplarModel.hasMany(exemplar.exemplarModel);
exemplar.exemplarModel.belongsTo(produtoExemplarModel, {through: "idExemplar" });

module.exports = {
  produtoExemplarModel
};