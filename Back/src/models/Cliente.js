const db = require("./db.js");

class Cliente {
  static async add(clienteDados, t) {
    let criaCliente = await clienteModel.create({
      clienteNome: clienteDados.nome,
      clienteCPF: clienteDados.cpf,
      clienteEndereco: clienteDados.endereco,
      clienteTelefone: clienteDados.telefone,
      clienteQtdLocada: 0
    }, { transaction: t });

    return criaCliente;
  }

  static async getById(id) {
    const clienteFindId = await clienteModel.findByPk(id);
    return clienteFindId;
  }

  static async getAll() {
    const clientes = await clienteModel.findAll();
    return clientes;
  }

  static async getOne(cpf, t) {
    const clientes = await clienteModel.findAll({
      where: {
        clienteCPF: cpf
      }, transaction: t
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

  // Acha uma relação específica cadastrada no banco
  static async BuscaRelacao(dados) {
    const relacao = await db.sequelize.query(
      `SELECT cliente.idCliente, cliente.clienteNome, cliente.clienteCPF, cliente.clienteEndereco, cliente.clienteTelefone,
              cliente.clienteQtdLocada, dependentes.depNome
       FROM   livrariasibd.dependentes as dependentes, livrariasibd.clientes as cliente, livrariasibd.clientedependentes as relacao 
       WHERE  relacao.idCliente = ${dados.id} and cliente.idCliente = relacao.idCliente and relacao.idDependente = dependentes.idDependente`
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
         FROM   livrariasibd.dependentes as dependentes, livrariasibd.clientes as cliente, livrariasibd.clientedependentes as relacao 
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
       FROM   livrariasibd.dependentes as dependentes, livrariasibd.clientes as cliente, livrariasibd.clientedependentes as relacao 
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