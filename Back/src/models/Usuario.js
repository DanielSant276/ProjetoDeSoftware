const db = require("./db.js");

class Usuario {
  static async add(usuarioDados, t) {
    let createUser = await usuarioModel.create({
      login: usuarioDados.login,
      senha: usuarioDados.senha,
      usuarioTipo: usuarioDados.tipo,
    }, { transaction: t });

    return createUser;
  }

  static async getById(id) {
    const usuarioById = await usuarioModel.findByPk(id);
    return usuarioById;
  }

  static async getByLogin(login) {
    const usuarioByLogin = await usuarioModel.findAll({
      where: {
        login: login
      }
    });
    return usuarioByLogin;
  }

  static async getAll() {
    const usuarios = await usuarioModel.findAll();
    return usuarios;
  }

  static async confereLogin(login, senha) {
    const loginVerificado = await usuarioModel.findAll({
      where: {
        login: login,
        senha: senha
      }
    });

    return loginVerificado;
  }

  static async confereUsuario(login) {
    const loginVerificado = await usuarioModel.findAll({
      where: {
        login: login,
      }
    });

    return loginVerificado;
  }

  static async modificaSenha(dados, t) {
    const mudalogin = await usuarioModel.update({
      senha: dados.senha
    },
      {
        where: {
          idUsuario: dados.idUsuario
        },
        transaction: t
      })
  }
}

const usuarioModel = db.sequelize.define('usuarios', {
  idUsuario: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  login: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  usuarioTipo: {
    type: db.Sequelize.ENUM("Gerente", "Atendente"),
    allowNull: false
  }
})

// Usuario.sync({force: true});

module.exports = {
  usuarioClass: Usuario,
  usuarioModel: usuarioModel,
};