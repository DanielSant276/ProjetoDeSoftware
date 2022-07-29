const db = require("./db.js");

class Locacao {
  constructor(locacaoPreço, dataLocada, dataDevolucao, locacaoEstado = "locado", locacaoMulta = 0.0) {
    this.locacaoPreço = locacaoPreço,
      this.dataLocada = dataLocada,
      this.dataDevolucao = dataDevolucao,
      this.locacaoEstado = locacaoEstado,
      this.locacaoMulta = locacaoMulta
  }

  static async add(locacaoDados) {
    return await locacaoModel.create({
      locacaoPreço: locacaoDados.locacaoPreço,
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

  static async getAll() {
    const locacaos = await dependenteModel.findAll();
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
}

const locacaoModel = db.sequelize.define('locacoes', {
  idLocacao: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  locacaoMulta: {
    type: db.Sequelize.FLOAT
  },
  locacaoPreço: {
    type: db.Sequelize.FLOAT,
    allowNull: false
  },
  dataDevolucao: {
    type: db.Sequelize.DATE,
    allowNull: false
  },
  dataLocada: {
    type: db.Sequelize.DATE,
    allowNull: false
  },
  locacaoEstado: { //verificar essas possibilidades
    type: db.Sequelize.ENUM("locado", "pendente", "atrasado")
  }
})

// Locacao.sync({force: true});

module.exports = {
  locacaoModel: locacaoModel
};