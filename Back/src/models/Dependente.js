const db = require("./db.js");

class Dependente {
  static async add(dados, t) {
    return await dependenteModel.create({
      depNome: dados.dependente,
      depCPF: dados.cpf
    }, { transaction: t });
  }

  static async getById(id) {
    const dependenteById = await dependenteModel.findByPk(id);
    return dependenteById;
  }

  static async getAll() {
    const dependentes = await dependenteModel.findAll();
    return dependentes;
  }

  static async getByResponsavelCPF(dados, t) {
    const dependentes = await dependenteModel.findAll({
      where: {
        depCPF: dados.cpf
      }, transaction: t
    })
    return dependentes;
  }
}

const dependenteModel = db.sequelize.define('dependentes', {
  idDependente: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  depCPF: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  depNome: {
    type: db.Sequelize.STRING,
    allowNull: false
  }
})

// Dependente.sync({force: true});

module.exports = {
  dependenteClass: Dependente,
  dependenteModel: dependenteModel,
};