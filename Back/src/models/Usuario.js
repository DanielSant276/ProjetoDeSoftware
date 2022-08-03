const db = require("./db.js");

class Usuario {
  constructor(login, senha, tipo = "") {
    this.login = login;
    this.senha = senha;
    this.tipo = tipo;
  }

  async add(usuarioDados) {
    let createUser = await usuarioModel.create({
      login: usuarioDados.login,
      senha: usuarioDados.senha,
      usuarioTipo: usuarioDados.tipo,
    });

    return createUser;
  }

  async getById(id) {
    const usuarioById = await usuarioModel.findByPk(id);
    return usuarioById;
  }

  async getAll() {
    const usuarios = await usuarioModel.findAll();
    return usuarios;
  }

  async confereLogin(login, senha) {
    const loginVerificado = await usuarioModel.findAll({
      where: {
        login: login,
        senha: senha
      }
    });

    return loginVerificado;
  }

  async confereUsuario(login) {
    const loginVerificado = await usuarioModel.findAll({
      where: {
        login: login,
      }
    });

    return loginVerificado;
  }
}

const usuarioModel = db.sequelize.define('usuarios', {
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

module.exports = {
  usuarioClass: Usuario,
  usuarioModel: usuarioModel,
};