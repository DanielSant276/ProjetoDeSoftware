const express = require('express');
const db = require("../models/db.js");
const path = require('path');
const livro = express.Router();

const { generoClass } = require('../models/Genero');
const { produtoClass } = require("../models/Produto");
const { produtoGeneroClass } = require("../models/ProdutoGenero");

livro.route("/generos")
  .get(async function (req, res) {
    let generos = await generoClass.getAll();

    res.send({ data: generos });
  })

livro.route("/relacoes")
  .get(async function (req, res) {
    let livros = await produtoClass.getAll();

    let relacoes = []
    for (let i = 0; i < livros.length; i++) {
      let genero = await produtoClass.getRelacaoProdutoGenero(livros[i].dataValues.idProduto);

      relacoes.push([livros[i].dataValues, genero]);
    }

    res.send({ data: relacoes })
  })

livro.route("/:id")
  .get(async function (req, res) {
    let livroId = req.params.id

    try {
      let livro = await produtoClass.getOneById(livroId);

      let genero = await produtoClass.getRelacaoProdutoGeneroId(livroId);

      res.send({ data: [livro, genero[0]] });
    }
    catch (error) {
      console.log(error);
    }
  })
  .put(async function (req, res) {
    let produtoDados = req.body;
    // Modifica os valores relacionados ao produto
    try {
      const result = await db.sequelize.transaction(async (t) => {
        let modificaProduto = await produtoClass.editarProduto(produtoDado, t);
        let getGeneros = await generoClass.getGeneros(produtoDados.generos, t);
        let getGenerosRelacao = await produtoGeneroClass.getByProdutoID(produtoDados.id, t);
        let modificaGeneroRelacao = await produtoGeneroClass.editarGeneroRelacao(getGeneros[0].dataValues.idGenero, getGenerosRelacao, t);
      })
      res.send({ mensagem: "enviado" });
    }
    catch (error) {
      console.log(error);
      res.send({ mensagem: "falha no envio" });
    }
  })
  .delete(async function (req, res) {
    let produtoID = req.params.id

    // Deleta a relação entre produto e genero
    try {
      const result = await db.sequelize.transaction(async (t) => {
        // deleta a relação entre o produto e o genero
        let deleteRelacaoProdutoGenero = await produtoGeneroClass.deletarProdutoGenero(produtoID, t);

        // deleta o produto
        let deleteProduto = await produtoClass.deletarProduto(produtoID, t);
      })

      res.send({ mensagem: "deletado" });
    } catch (error) {
      console.log(error);
      console.log("erro ao deletar o produto");
    }
  })

livro.route("/")
  .get(async function (req, res) {
    getProduto = await produtoClass.getAll();
    res.send({ data: getProduto });
  })
  .post(async function (req, res) {
    // define as informações do produto
    let produtoDados = {
      titulo: req.body.produto.titulo,
      autor: req.body.produto.autor,
      genero: req.body.produto.genero,
      descricao: req.body.produto.descricao,
      lancamento: req.body.produto.lancamento,
      edicao: req.body.produto.edicao,
      paginas: req.body.produto.paginas,
      numExemplares: req.body.produto.numExemplares
    }

    let novoProduto;
    // cria um novo produto
    try {
      const result = await db.sequelize.transaction(async (t) => {
        novoProduto = await produtoClass.add(produtoDados, t);

        // recebe as informações do produto recem cadastrado no banco de dados
        let getProduto;
        getProduto = await produtoClass.getOneByTitle(produtoDados.titulo, t);

        console.log(getProduto);
        // cadastra a relação entre produto e genero
        let produtoGeneroRelacao;
        produtoGeneroRelacao = await produtoGeneroClass.add(getProduto[0].dataValues.idProduto, produtoDados.genero, t);

        // devolve as relações para o front
        res.send({ mensagem: "Enviado com sucesso" });
      })
    }
    catch (error) {
      res.send({ status: '500', mensagem: "Algo deu errado" });
      console.log(error);
    }
  })

module.exports = livro;