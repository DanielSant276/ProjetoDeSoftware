const db = require("./db.js");
const produto = require("./Produto.js");
const exemplar = require("./Exemplar.js");

class ProdutoExemplar {
  static async add(livroId, exemplarID) {
    for (let i = 0; i < exemplarID.length; i++) {
      let produtoExemplarRelacao = await produtoExemplarModel.create({
        idProduto: livroId,
        idExemplar: exemplarID[i]
      });
    }
  }

  static async deletarProdutoExemplar(produtoId) {
    let deleteProdutoExemplar = await produtoExemplarModel.destroy({
      where: {
        idProduto: produtoId
      }
    });
  }
}

const produtoExemplarModel = db.sequelize.define('produtoExemplares', {
  idProduto: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: produto.produtoModel,
      key: "idProduto",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  idExemplar: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: exemplar.exemplarModel,
      key: "idExemplar",
      deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
})

// ProdutoExemplar.sync({force: true});

// Estava dando problema na criação então resolvi comentar tudo
// Mapeando ProdutoExemplar e Produto
// produtoExemplarModel.belongsTo(produto.produtoModel, {through: "idProduto" } );
// produto.produtoModel.hasMany(produtoExemplarModel);

// Mapeando ProdutoExemplar e Exemplar
// produtoExemplarModel.hasMany(exemplar.exemplarModel);
// exemplar.exemplarModel.belongsTo(produtoExemplarModel, {through: "idExemplar" });

module.exports = {
  produtoExemplarClass: ProdutoExemplar,
  produtoExemplarModel: produtoExemplarModel
};