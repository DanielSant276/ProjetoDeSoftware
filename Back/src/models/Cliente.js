const db = require("./db.js");
const dependente = require("./dependente.js");
// const { clienteDependenteClass } = require("./clienteDependente.js");
// const clienteDependente = require("./clienteDependente.js");

class Cliente {
  static async add(clienteDados) {
    let criaCliente = await clienteModel.create({
      clienteNome: clienteDados.nome,
      clienteCPF: clienteDados.cpf,
      clienteEndereco: clienteDados.endereco,
      clienteTelefone: clienteDados.telefone,
      clienteQtdLocada: 0
    });

    criaCliente = await this.getOne(clienteDados.cpf);

    if (this.dependentes == undefined) {
      return [criaCliente, 0]
    }
    else {
      let criaDependente = await this.criaDependente(clienteDados);

      if (criaDependente != "Abortar") {
        await this.relacaoClienteDependente(criaCliente, criaDependente);

        return [criaCliente, criaDependente];
      }
      return "Abortar"
    }
  }

  static async getById(id) {
    const clienteFindId = await clienteModel.findByPk(id);
    return clienteFindId;
  }

  static async getAll() {
    const clientes = await clienteModel.findAll();
    return clientes;
  }

  static async getOne(cpf) {
    const clientes = await clienteModel.findAll({
      where: {
        clienteCPF: cpf
      }
    })

    return clientes
  }

  static async deleteOne(id, cpf) {
    const deleteCliente = await clienteModel.destroy({
      where: {
        idCliente: id,
        clienteCPF: cpf
      }
    })

    console.log("Deletado por problemas tecnicos");
  }

  // Adiciona os dependentes do cliente no banco de dados
  static async criaDependente(clienteDados) {
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
  static async relacaoClienteDependente(responsavel, dependente) {
    let relacao;
    for (let i = 0; i < dependente.length; i++) {
      try {
        relacao = new clienteDependenteClass(responsavel[0].dataValues.idCliente, dependente[i].dataValues.idDependente);
        relacao.add();
      }
      catch (error) {
        console.log(error);
        return "Abortar";
      }
    }
  }

  // Acha uma relação específica cadastrada no banco
  static async BuscaRelacao(cliente) {
    const relacao = await db.sequelize.query(
      `SELECT cliente.idCliente, cliente.clienteNome, cliente.clienteCPF, cliente.clienteEndereco, cliente.clienteTelefone,
              cliente.clienteQtdLocada, dependentes.depNome
       FROM   teste.dependentes as dependentes, teste.clientes as cliente, teste.clientedependentes as relacao 
       WHERE  relacao.idCliente = ${cliente} and cliente.idCliente = relacao.idCliente and relacao.idDependente = dependentes.idDependente`
    );

    return relacao;
  }

  // Busca todas as relações
  static async BuscaTodasRelacoes() {
    const relacoes = await this.getAll();

    let relacoesArr = []

    for (let i = 0; i < relacoes.length; i++) {
      let relacao = await db.sequelize.query(
        `SELECT cliente.idCliente, cliente.clienteNome, cliente.clienteCPF, cliente.clienteEndereco, cliente.clienteTelefone,
                cliente.clienteQtdLocada, dependentes.depNome
         FROM   teste.dependentes as dependentes, teste.clientes as cliente, teste.clientedependentes as relacao 
         WHERE  relacao.idCliente = ${relacoes[i].idCliente} and cliente.idCliente = relacao.idCliente and relacao.idDependente = dependentes.idDependente`
      )

      relacoesArr.push([relacoes[i], relacao]);
    }

    return relacoesArr;
  }

  // Acha todas as relações cadastradas no banco
  static async novaLocacao() {
    const relacoes = await db.sequelize.query(
      `SELECT cliente.idCliente, cliente.clienteNome, cliente.clienteCPF, cliente.clienteEndereco, cliente.clienteTelefone,
              cliente.clienteQtdLocada, dependentes.depNome
       FROM   teste.dependentes as dependentes, teste.clientes as cliente, teste.clientedependentes as relacao 
       WHERE  cliente.idCliente = relacao.idCliente and relacao.idDependente = dependentes.idDependente`
    );

    return relacoes;
  }
}

const clienteModel = db.sequelize.define('clientes', {
  idCliente: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  clienteNome: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  clienteCPF: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  clienteTelefone: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  clienteEndereco: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  clienteQtdLocada: {
    type: db.Sequelize.INTEGER,
    allowNull: false
  }
})

// Client.sync({force: true})

module.exports = {
  clienteClass: Cliente,
  clienteModel: clienteModel
};