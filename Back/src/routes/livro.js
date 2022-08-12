const express = require('express');
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

      let genero = await produtoClass.getRelacaoProdutoGenero(livroId);

      res.send([livro, genero]);
    }
    catch (error) {
      console.log(error);
    }
  })
  .put(async function (req, res) {
    // Cria o bloco de informações para ser alterado no banco de dados
    let produtoDados = {
      id: req.params.id,
      numExemplares: req.body.numExemplares,
      lancamento: req.body.lancamento,
      edicao: req.body.edicao,
      paginas: req.body.paginas,
      autor: req.body.autor,
      descricao: req.body.descricao,
      titulo: req.body.titulo,
      genero: parseInt(req.body.generos)
    }

    // Modifica os valores relacionados ao produto
    try {
      // let modificaProduto = await produtoClass.editarProduto(produtoDados);
    }
    catch (error) {
      console.log(error);
      console.log("falha ao modificar o produto");
    }

    try {
      let getGeneros = await generoClass.getGeneros(produtoDados.genero);
      let getGenerosRelacao = await produtoGeneroClass.getByProdutoID(produtoDados.id);
      let modificaGeneroRelacao = await produtoGeneroClass.editarGeneroRelacao(getGeneros, getGenerosRelacao);
    }
    catch (error) {
      console.log(error);
      console.log("falha ao modificar o genero");
    }
  })
  .delete(async function (req, res) {
    let produtoId = req.params.id

    // Deleta a relação entre produto e genero
    try {
      let deleteRelacaoProdutoGenero = await produtoGeneroClass.deletarProdutoGenero(produtoId);
    }
    catch (error) {
      console.log(error);
      console.log("erro ao deletar relação entre produto e genero");
    }


    // Deleta o produto
    try {
      let deleteProduto = await produtoClass.deletarProduto(produtoId);
    } catch (error) {
      console.log(error);
      console.log("erro ao deletar os produtos");
    }

    res.send("deletado");
  })

livro.route("/")
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
      novoProduto = await produtoClass.add(produtoDados);
    }
    catch (error) {
      console.log(error);
      console.log("cria produto");
      res.send({ mensagem: "Ocorreu um erro ao criar o produto" })
    }

    // recebe as informações do produto recem cadastrado no banco de dados
    let getProduto;
    try {
      getProduto = await produtoClass.getOneByTitle(produtoDados.titulo);
    }
    catch (error) {
      console.log(error);
      console.log("pega produto");
      res.send({ mensagem: "Ocorreu um erro ao procurar o produto" })
    }

    console.log(getProduto);
    // cadastra a relação entre produto e genero
    let produtoGeneroRelacao;
    try {
      produtoGeneroRelacao = await produtoGeneroClass.add(getProduto[0].dataValues.idProduto, produtoDados.genero);
    }
    catch (error) {
      console.log(error);
      console.log("gera relação");
      res.send({ mensagem: "Ocorreu um erro ao gerar a relação entre gênero e produtos" })
    }

    // devolve as relações para o front
    res.send({ mensagem: "Enviado com sucesso" });
  })

module.exports = livro;