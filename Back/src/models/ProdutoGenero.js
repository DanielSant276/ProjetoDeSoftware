const db = require("./db.js");
const Produto = require("./Produto.js");
const Genero = require("./Genero.js");

const ProdutoGenero = db.sequelize.define('produtoGenero', {
  idProduto: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: Produto,
      key: "idProduto",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  idGenero: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: Genero,
      key: "idGenero",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
})

// ProdutoGenero.sync({force: true});

module.exports = ProdutoGenero;