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

  static async getByClienteIdNoTransaction(id) {
    let locacaoByClienteId = await locacaoModel.findAll({
      where: {
        idCliente: id
      }
    });

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

  static async getProdutos(locacaoId) {
    let relacao = await db.sequelize.query(
      `SELECT produto.idProduto, produto.tituloProduto
       FROM   livrariasibd.locacoes as locacoes, livrariasibd.locacaoprodutos as relacao, livrariasibd.produtos as produto
       WHERE  locacoes.idLocacao = ${locacaoId} and relacao.idLocacao = ${locacaoId} and relacao.idProduto = produto.idProduto;`
    )
    return relacao;
  }

  static async editarLocacao(locacao, t) {
    const modificaLocacao = await locacaoModel.update({
      locacaoEstado: locacao.locacaoEstado,
      locacaoMulta: locacao.locacaoMulta
    },
      {
        where: {
          idLocacao: locacao.idLocacao
        }, transaction: t
      })
  }

  static async devolverLocacao(id, t) {
    const modificaLocacao = await locacaoModel.update({
      locacaoEstado: "Devolvido"
    },
      {
        where: {
          idLocacao: id
        }, transaction: t
      })
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