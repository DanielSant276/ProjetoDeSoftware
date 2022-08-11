const db = require("./db.js");

class Dependente {
  static async add(nome, responsavel) {
    return await dependenteModel.create({
      depNome: nome,
      depResponsavel: responsavel
    });
  }

  static async getById(id) {
    const dependenteById = await dependenteModel.findByPk(id);
    return dependenteById;
  }

  static async getAll() {
    const dependentes = await dependenteModel.findAll();
    return dependentes;
  }

  static async getAllByResponsavel(responsavel) {
    try {
      const dependentes = await dependenteModel.findAll({
        where: {
          depResponsavel: responsavel
        }
      })
      return dependentes;
    }
    catch (error) {
      console.log(error);
    }
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