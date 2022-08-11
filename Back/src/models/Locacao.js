const db = require("./db.js");

class Locacao {
  static async add(locacaoDados) {
    return await locacaoModel.create({
      idCliente: locacaoDados.clienteId,
      locacaoPreço: locacaoDados.locacaoPreco,
      dataLocada: locacaoDados.dataLocada,
      dataDevolucao: locacaoDados.dataDevolucao,
      locacaoEstado: locacaoDados.locacaoEstado,
      locacaoMulta: locacaoDados.locacaoMulta
    });
  }

  static async getById(id) {
    const locacaoById = await locacaoModel.findByPk(id);
    return locacaoById;
  }

  static async getByClienteId(id) {
    let locacaoByClienteId = await locacaoModel.findAll({
      where: {
        idCliente: id
      }
    });

    locacaoByClienteId = locacaoByClienteId[locacaoByClienteId.length - 1].dataValues.idLocacao;

    return locacaoByClienteId;
  }

  static async getAll() {
    const locacaos = await locacaoModel.findAll();
    return locacaos;
  }

  //fazer isso certo
  static async getLocacaoByCliente(id) {
    const locacaoByCliente = await locacaoModel.findAll({
      where: {
        id: id
      },
    });
    return locacaoByCliente
  }

  static async getRelacao() {
    let relacoes = await this.getAll();

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
    return relacoes;
  }
}

const locacaoModel = db.sequelize.define('locacoes', {
  idLocacao: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idCliente: {
    type: db.Sequelize.INTEGER,
    allowNull: false
  },
  locacaoEstado: {
    type: db.Sequelize.ENUM("Locado", "Atrasado", "Devolvido")
  },
  locacaoPreço: {
    type: db.Sequelize.FLOAT,
    allowNull: false
  },
  dataLocada: {
    type: db.Sequelize.DATE,
    allowNull: false
  },
  dataDevolucao: {
    type: db.Sequelize.DATE,
    allowNull: false
  },
  locacaoMulta: {
    type: db.Sequelize.FLOAT
  }
})

// Locacao.sync({force: true});

module.exports = {
  locacaoClass: Locacao,
  locacaoModel: locacaoModel
};