const db = require("./db.js");

const Cliente = db.sequelize.define('cliente', {
  idCliente: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  clienteQtdLocada: {
    type: db.Sequelize.INTEGER,
    allowNull: false
  },
  clienteTelefone: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  clienteEndereco: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  clienteCPF: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  clienteNome: {
    type: db.Sequelize.STRING,
    allowNull: false
  }
})

// Client.sync({force: true})

module.exports = Cliente;