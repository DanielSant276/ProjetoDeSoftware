const Sequelize = require ('sequelize'); 
const db = require("./db.js");
const cliente = require("./cliente.js");
const dependente = require("./dependente.js");

class ClienteDependente{
  constructor(idCliente, idDependente) {
    this.idCliente = idCliente;
    this.idDependente = idDependente;
  }

  async add() {
		return await clienteDependenteModel.create({
			idCliente: this.idCliente,
			idDependente: this.idDependente,
		});
	}

  // Quando tiver internet verificar como faz para fazer uma busca
  async getDependentesCliente(idCliente){
		const clienteDependenteById = await clienteDependenteModel.findAll({
      where: {
        idCliente: idCliente
      }
    });
		return clienteDependenteById;         
	}

  async getAll(){
		const ClienteDependenteRelacao = await clienteDependenteModel.findAll();
		return ClienteDependenteRelacao;
	}
}

const clienteDependenteModel = db.sequelize.define("clienteDependentes", {
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

// Mapeando ClienteDependente e Cliente
// clienteDependenteModel.hasOne(cliente.clienteModel, {through: "idCliente" } );
// cliente.clienteModel.hasMany(clienteDependenteModel);

// Mapeando Model e Dependente
// clienteDependenteModel.hasMany(dependente.dependenteModel);
// dependente.dependenteModel.belongsTo(clienteDependenteModel, {through: "idDependente" });


module.exports = {
  clienteDependenteClass: ClienteDependente,
  clienteDependenteModel: clienteDependenteModel
};