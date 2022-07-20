const db = require("./db.js");

class Dependente {
  constructor(nome, responsavelNome) {
    this.nome = nome,
    this.responsavelNome = responsavelNome
  }

  static async add(dependenteDados) {
		return await dependenteModel.create({
			nome: dependenteDados.nome,
			responsavelNome: dependenteDados.responsavelNome,
		});
	}

  static async getById(id){
		const dependenteById = await dependenteModel.findByPk(id);
		return dependenteById;         
	}

  static async getAll(){
		const dependentes = await dependenteModel.findAll();
		return dependentes;
	}
}

const dependenteModel = db.sequelize.define('dependente', {
  idDependente: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  depResponsavel: {
    type: db.Sequelize.INTEGER,
    allowNull: false
  },
  depNome: {
    type: db.Sequelize.STRING,
    allowNull: false
  }
})

// Dependente.sync({force: true});

module.exports = {
  dependenteModel,
  Dependente
};