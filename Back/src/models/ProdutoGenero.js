const db = require("./db.js");
const produto = require("./Produto.js");
const genero = require("./Genero.js");

const produtoGeneroModel = db.sequelize.define('produtoGeneros', {
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

// Estava dando problema na criação então resolvi comentar tudo
// Mapeando ProdutoGenero e Produto
// produtoGeneroModel.belongsTo(produto.produtoModel, {through: "idProduto" } );
// produto.produtoModel.hasMany(produtoGeneroModel);

// Mapeando ProdutoGenero e Genero
// produtoGeneroModel.hasMany(genero.generoModel);
// genero.generoModel.belongsTo(produtoGeneroModel, {through: "idGenero" });

module.exports = {
  produtoGeneroModel: produtoGeneroModel
};