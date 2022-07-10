const db = require("./db.js");

const Produto = db.sequelize.define('produto', {
  idProduto: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  numExemplares: {
    type: db.Sequelize.INTEGER,
    allowNull: false
  },
  lancamento: {
    type: db.Sequelize.DATE,
    allowNull: false
  },
  edicao: {
    type: db.Sequelize.INTEGER,
    allowNull: false
  },
  qtdPaginas: {
    type: db.Sequelize.INTEGER,
    allowNull: false
  },
  autor: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: db.Sequelize.TEXT,
    allowNull: false
  },
  tituloProduto: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  qtdLocados: {
    type: db.Sequelize.INTEGER,
    allowNull: false
  }
})

// Produto.sync({force: true});

module.exports = Produto;