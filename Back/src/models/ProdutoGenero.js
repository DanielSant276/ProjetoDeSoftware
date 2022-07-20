const db = require("./db.js");
const produto = require("./Produto.js");
const genero = require("./Genero.js");

const produtoGeneroModel = db.sequelize.define('produtoGenero', {
  idProduto: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: produto.produtoModel,
      key: "idProduto",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  idGenero: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: genero.generoModel,
      key: "idGenero",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
})

// ProdutoGenero.sync({force: true});

// Não estou confiante desses dois, espero que não de problema
// Mapeando ProdutoGenero e Produto
produtoGeneroModel.belongsTo(produto.produtoModel, {through: "idProduto" } );
produto.produtoModel.hasMany(produtoGeneroModel);

// Mapeando ProdutoGenero e Genero
produtoGeneroModel.hasMany(genero.generoModel);
genero.generoModel.belongsTo(produtoGeneroModel, {through: "idGenero" });

module.exports = {
  produtoGeneroModel
};