const db = require("./db.js");

const Locacao = db.sequelize.define('locacao', {
  idLocacao: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  locacaoMulta: {
    type: db.Sequelize.FLOAT
  },
  locacaoPreço: {
    type: db.Sequelize.FLOAT,
    allowNull: false
  },
  dataDevolucao: {
    type: db.Sequelize.DATE,
    allowNull: false
  },
  dataLocada: {
    type: db.Sequelize.DATE,
    allowNull: false
  },
  locacaoEstado: { //verificar essas possibilidades
    type: db.Sequelize.ENUM("locado", "pendente", "atrasado")
  }
})

// Locacao.sync({force: true});

module.exports = Locacao;