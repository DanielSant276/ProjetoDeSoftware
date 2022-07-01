const db = require("./db.js");

const Usuario = db.sequelize.define('usuario', {
  idUsuario: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  usuarioTipo: {
    type: db.Sequelize.ENUM("gerente", "atendente"),
    allowNull: false
  },
  senha: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  login: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})

// Usuario.sync({force: true});

module.exports = Usuario;