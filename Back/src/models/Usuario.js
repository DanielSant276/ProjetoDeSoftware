const db = require("./db.js");

class Usuario {
  constructor(login, senha, tipo = "") {
    this.login = login;
    this.senha = senha;
    this.tipo = tipo;
  }

  static async add(usuarioDados) {
    return await usuarioModel.create({
      login: usuarioDados.login,
      senha: usuarioDados.senha,
      tipo: usuarioDados.tipo,
    });
  }

  static async getById(id) {
    const usuarioById = await usuarioModel.findByPk(id);
    return usuarioById;
  }

  static async getAll() {
    const usuarios = await usuarioModel.findAll();
    return usuarios;
  }

  static async confereLogin(login, senha) {
    const loginVerificado = await usuarioModel.findOne({
      where: {
        login: login,
        senha: senha
      }
    });

    return loginVerificado;
  }
}

const usuarioModel = db.sequelize.define('usuario', {
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
  usuarioModel,
  Usuario
};