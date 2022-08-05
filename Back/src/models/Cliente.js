const db = require("./db.js");
const dependente = require("./dependente.js");
const { clienteDependenteClass } = require("./clienteDependente.js");
// const clienteDependente = require("./clienteDependente.js");

class Cliente {
  constructor(nome, cpf, endereco, telefone, dependentes = "", qtdLocada = 0) {
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.telefone = telefone;
    this.dependentes = dependentes;
    this.qtdLocada = qtdLocada;
  }

  async add(clienteDados) {
    let criaCliente = await clienteModel.create({
      clienteNome: clienteDados.nome,
      clienteCPF: clienteDados.cpf,
      clienteEndereco: clienteDados.endereco,
      clienteTelefone: clienteDados.telefone,
      clienteQtdLocada: 0
    });

    criaCliente = await this.getOne(clienteDados.cpf);

    let criaDependente = await this.criaDependente(clienteDados);

    if (criaDependente != "Abortar") {
      let relacao = await this.relacaoClienteDependente(criaCliente, criaDependente);

      return relacao;
    }
    return false
  }

  async getById(id) {
    const clienteFindId = await clienteModel.findByPk(id);
    return clienteFindId;
  }

  async getAll() {
    const clientes = await clienteModel.findAll();
    return clientes;
  }

  async getOne(cpf) {
    const clientes = await clienteModel.findAll({
      where: {
        clienteCPF: cpf
      }
    })

    return clientes
  }

  async deleteOne(id, cpf) {
    const deleteCliente = await clienteModel.destroy({
      where: {
        idCliente: id,
        clienteCPF: cpf
      }
    })

    console.log("Deletado por problemas tecnicos");
  }

  // Adiciona os dependentes do cliente no banco de dados
  async criaDependente(clienteDados) {
    let novosDependentes = [];
    let novoDependente;

    for (let i = 0; i < this.dependentes.length; i++) {
      try {
        novoDependente = new dependente.dependenteClass(clienteDados.dependentes[i], clienteDados.nome);
        await novoDependente.add(clienteDados.dependentes[i], clienteDados.nome);
      }
      catch (error) {
        let achaCliente = await this.getOne(clienteDados.cpf);
        this.deleteOne(achaCliente[0].dataValues.idCliente, achaCliente[0].dataValues.clienteCPF);

        return "Abortar";
      }
      novosDependentes.push(novoDependente);
    }

    novosDependentes = await novoDependente.getAllByResponsavel(clienteDados.nome);

    return novosDependentes;
  }

  // Adiciona a relação entre cliente e dependente no banco de dados
  async relacaoClienteDependente(responsavel, dependente) {
    let relacao;
    for (let i = 0; i < dependente.length; i++) {
      try {
        relacao = new clienteDependenteClass(responsavel[0].dataValues.idCliente, dependente[i].dataValues.idDependente);
        relacao.add();
      }
      catch (error) {
        return error
      }
    }
    let clienteDependenteQuery = this.BuscaRelacao();

    return clienteDependenteQuery
  }

  // Acha uma relação específica cadastrada no banco
  async BuscaRelacao(cpf, cliente) {
    // const cliente = await clienteModel.findAll({
    //   where: {
    //     clienteCPF: cpf
    //   }
    // })

    // passar para o model do dependente
    const dependente = await clienteModel.findAll({
      where: {
        depResponsável: cliente.nome
      }
    })
  }

  // Acha todas as relações cadastradas no banco
  async BuscaTodasRelacoes() {
    console.log("Acha todas as realações cadastradas no banco");
  }

  async novaLocacao() {
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