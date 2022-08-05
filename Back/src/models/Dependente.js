const db = require("./db.js");

class Dependente {
  constructor(nome, responsavelNome) {
    this.nome = nome,
    this.responsavelNome = responsavelNome
  }

  async add(nome, responsavel) {
		return await dependenteModel.create({
			depNome: nome,
			depResponsavel: responsavel
		});
	}

  async getById(id){
		const dependenteById = await dependenteModel.findByPk(id);
		return dependenteById;         
	}

  async getAll(){
		const dependentes = await dependenteModel.findAll();
		return dependentes;
	}

  async getAllByResponsavel(responsavel) {
    const dependentes = await dependenteModel.findAll({
      where: {
        depResponsavel: responsavel
      }
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
  depResponsavel: {
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