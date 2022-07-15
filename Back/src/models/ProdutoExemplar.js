const db = require("./db.js");
const Produto = require("./Produto.js");
const Exemplar = require("./Exemplar.js");

const ProdutoExemplar = db.sequelize.define('produtoExemplar', {
  idProduto: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: Produto,
      key: "idProduto",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  idExemplar: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: Exemplar,
      key: "idExemplar",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
})

// ProdutoExemplar.sync({force: true});

module.exports = ProdutoExemplar;