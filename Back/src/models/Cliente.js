const db = require("./db.js");
const dependente = require("./dependente.js");

class Cliente {
  constructor(nome, cpf, endereco, telefone, qtdLocada = 0, qtdDependentes = 0) {
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.telefone = telefone;
    this.qtdLocada = qtdLocada;
    this.dependentes = qtdDependentes;
  }

  static async add(clienteDados) {
		return await clienteModel.create({
			nome: clienteDados.nome,
			cpf: clienteDados.cpf,
      endereco: clienteDados.endereco,
      telefone: clienteDados.telefone,
      qtdLocada: 0
		});
	}

  static async getById(id){
		const clienteFindId = await clienteModel.findByPk(id);
		return clienteFindId;         
	}

  static async getAll(){
		const clientes = await clienteModel.findAll();
		return clientes;
	}

  static async criaDependente(qtdDependentes, dependentendeDados) {
    let dependentesId = [];

    let criaDependente;
    for (i = 0; i < qtdDependentes; i++) {
      criaDependente = new dependente.Dependente(dependentendeDados.nome, dependentendeDados.responsavelNome);

      criaDependente.add(dependentendeDados)
      // pegar aqui o id e dar um push para o dependentesId
      // dependentesId.push(o id que vier)
    }
		
    let novaDependencia;
    for (i = 0; i < dependentesId.length; i++) {
      novaDependencia = new ClienteDependente(this.idCliente ,dependentesId[i]);
      novaDependencia.add()
    }

    return await true
	}

  static async novaLocacao() {
    console.log("cria uma nova locação");
    return await true
  }
}

const clienteModel = db.sequelize.define('clientes', {
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

module.exports = {
  clienteClass: Cliente,
  clienteModel: clienteModel
};