const Sequelize = require ('sequelize'); 
const db = require("./db.js");
const cliente = require("./cliente.js");
const dependente = require("./dependente.js");

class ClienteDependente{
  constructor(idCliente, idDependente) {
    this.idCliente = idCliente;
    this.idDependente = idDependente;
  }

  static async add() {
		return await dependenteModel.create({
			idCliente: this.idCliente,
			idDependente: this.idDependente,
		});
	}

  // Quando tiver internet verificar como faz para fazer uma busca
  static async getDependentesCliente(idCliente){
		const clienteDependenteById = await dependenteModel.findAll({
      where: {
        idCliente: idCliente
      }
    });
		return clienteDependenteById;         
	}

  static async getAll(){
		const ClienteDependenteRelacao = await dependenteModel.findAll();
		return ClienteDependenteRelacao;
	}
}

const clienteDependenteModel = db.sequelize.define("clienteDependente", {
  idCliente: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: cliente.clienteModel,
      key: "idCliente",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  idDependente: {
    type: db.Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: dependente.dependenteModel,
      key: "idDependente",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
})

// ClienteDependente.sync({force: true});

// Não estou confiante desses dois, espero que não de problema
// Mapeando ClienteDependente e Cliente
clienteDependenteModel.hasOne(cliente.clienteModel, {through: "idCliente" } );
cliente.clienteModel.hasMany(clienteDependenteModel);

// Mapeando Model e Dependente
clienteDependenteModel.hasMany(dependente.dependenteModel);
dependente.dependenteModel.belongsTo(clienteDependenteModel, {through: "idDependente" });


module.exports = {
  clienteDependenteModel,
  ClienteDependente
};