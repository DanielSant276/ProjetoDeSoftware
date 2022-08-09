const db = require("./db.js");

class Produto {
  static async add(produtoDados) {
    let criaProduto = await produtoModel.create({
      numExemplares: produtoDados.numExemplares,
      lancamento: produtoDados.lancamento,
      edicao: produtoDados.edicao,
      qtdPaginas: produtoDados.paginas,
      autor: produtoDados.autor,
      descricao: produtoDados.descricao,
      tituloProduto: produtoDados.titulo,
      qtdLocados: 0
    });

    return criaProduto
  }

  static async getOneByTitle(titulo) {
    const produto = await produtoModel.findAll({
      where: {
        tituloProduto: titulo
      }
    })

    return produto;
  }

  static async getOneById(id) {
    const produto = await produtoModel.findAll({
      where: {
        idProduto: id
      }
    })

    return produto;
  }

  static async getAll() {
    const produtos = await produtoModel.findAll();
    return produtos;
  }

  static async getRelacaoProdutoGenero(produtoId) {
    const relacao = await db.sequelize.query(
      `SELECT generos.nome
       FROM   produtos, generos, produtogeneros as relacao
       WHERE  produtos.idProduto = ${produtoId} and produtos.idProduto = relacao.idProduto and relacao.idGenero = generos.idGenero;`
    );

    return relacao;
  }

  static async getRelacaoProdutoExemplar(produtoId) {
    const relacao = await db.sequelize.query(
      `SELECT exemplares.exemplarCodigo
       FROM   produtos, exemplares, produtoexemplares as relacao
       WHERE  produtos.idProduto = ${produtoId} and produtos.idProduto = relacao.idProduto and relacao.idExemplar = exemplares.idExemplar;`
    );

    return relacao;
  }

  static async getRelacaoExemplaresId(produtoId) {
    const relacao = await db.sequelize.query(
      `SELECT exemplares.idExemplar
        FROM   produtos, exemplares, produtoexemplares as relacao
        WHERE  produtos.idProduto = ${produtoId} and produtos.idProduto = relacao.idProduto and relacao.idExemplar = exemplares.idExemplar;`
    );

    return relacao;
  }

  static async editarProduto(produtoDados) {
    const modificaProduto = await produtoModel.update({
      numExemplares: produtoDados.numExemplares,
      lancamento: produtoDados.lancamento,
      edicao: produtoDados.edicao,
      qtdPaginas: produtoDados.paginas,
      autor: produtoDados.autor,
      descricao: produtoDados.descricao,
      tituloProduto: produtoDados.titulo
    },
      {
        where: {
          idProduto: produtoDados.id
        }
      })
  }

  static async deletarProduto(produtoId) {
    const produto = await produtoModel.destroy({
      where: {
        idProduto: produtoId
      }
    })
  }
}

const produtoModel = db.sequelize.define('produtos', {
  idProduto: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  numExemplares: {
    type: db.Sequelize.INTEGER,
    allowNull: false
  },
  lancamento: {
    type: db.Sequelize.STRING(4),
    allowNull: false
  },
  edicao: {
    type: db.Sequelize.INTEGER,
    allowNull: false
  },
  qtdPaginas: {
    type: db.Sequelize.INTEGER,
    allowNull: false
  },
  autor: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: db.Sequelize.TEXT,
    allowNull: false
  },
  tituloProduto: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  qtdLocados: {
    type: db.Sequelize.INTEGER,
    allowNull: false
  }
})

// Produto.sync({force: true});

module.exports = {
  produtoClass: Produto,
  produtoModel: produtoModel
};