const db = require("./db.js");

class Locacao {
  static async add(locacaoDados, t) {
    return await locacaoModel.create({
      idCliente: locacaoDados.clienteId,
      locacaoPreço: locacaoDados.locacaoPreco,
      dataLocada: locacaoDados.dataLocada,
      dataDevolucao: locacaoDados.dataDevolucao,
      locacaoEstado: locacaoDados.locacaoEstado,
      locacaoMulta: locacaoDados.locacaoMulta
    }, { transaction: t });
  }

  static async getById(id) {
    const locacaoById = await locacaoModel.findByPk(id);
    return locacaoById;
  }

  static async getByClienteId(id, t) {
    let locacaoByClienteId = await locacaoModel.findAll({
      where: {
        idCliente: id
      },
      transaction: t
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

  static async getRelacao(clienteID, t) {
    let relacao = await db.sequelize.query(
      `SELECT cliente.idCliente, cliente.clienteNome, produto.tituloProduto, produto.idProduto
      FROM livrariasibd.clientes as cliente, livrariasibd.locacoes as locacoes, livrariasibd.locacaoprodutos as relacao, livrariasibd.produtos as produto
      WHERE cliente.idCliente = ${clienteID} and locacoes.idCliente = ${clienteID} and locacoes.idLocacao = relacao.idLocacao and relacao.idProduto = produto.idProduto;`
    )
    return relacao;
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