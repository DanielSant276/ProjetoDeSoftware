const db = require("./db.js");
const produto = require("./Produto.js");
const genero = require("./Genero.js");

class ProdutoGenero {
  static async add(livroId, generoId, t) {
    let produtoGeneroRelacao = await produtoGeneroModel.create({
      idProduto: livroId,
      idGenero: generoId
    }, { transaction: t });
  }

  static async getByProdutoID(produtoId, t) {
    let relacaoByProdutoID = await produtoGeneroModel.findAll({
      where: {
        idProduto: produtoId
      },
      transaction: t
    })

    relacaoByProdutoID = relacaoByProdutoID[0].dataValues.id

    return relacaoByProdutoID;
  }

  static async editarGeneroRelacao(generoID, relacaoID, t) {
    const modificaProduto = await produtoGeneroModel.update({
      idGenero: generoID
    },
      {
        where: {
          id: relacaoID
        },
        transaction: t
      })
  }

  static async deletarProdutoGenero(produtoId, t) {
    let deleteProdutoGenero = await produtoGeneroModel.destroy({
      where: {
        idProduto: produtoId
      }, transaction: t
    });
  }
}

const produtoGeneroModel = db.sequelize.define('produtoGeneros', {
  idProduto: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: produto.produtoModel,
      key: "idProduto",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  idGenero: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: genero.generoModel,
      key: "idGenero",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
})

// ProdutoGenero.sync({force: true});

// Estava dando problema na criação então resolvi comentar tudo
// Mapeando ProdutoGenero e Produto
// produtoGeneroModel.belongsTo(produto.produtoModel, {through: "idProduto" } );
// produto.produtoModel.hasMany(produtoGeneroModel);

// Mapeando ProdutoGenero e Genero
// produtoGeneroModel.hasMany(genero.generoModel);
// genero.generoModel.belongsTo(produtoGeneroModel, {through: "idGenero" });

module.exports = {
  produtoGeneroClass: ProdutoGenero,
  produtoGeneroModel: produtoGeneroModel
};