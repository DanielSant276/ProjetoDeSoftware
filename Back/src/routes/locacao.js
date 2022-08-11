const express = require('express');
const path = require('path');
const locacao = express.Router();

const { locacaoClass } = require("../models/Locacao");
const { locacaoProdutoClass } = require("../models/LocacaoProduto");

locacao.route("/:id")
  .get(async function (req, res) {

  })
  .put(async function (req, res) {

  })
  .delete(async function (req, res) {

    res.send("deletado");
  })

locacao.route("/")
  .get(async function (req, res) {
    res.sendFile(path.join(__dirname, "../", "/teste/locacao.html"));
  })
  .post(async function (req, res) {
    let locacaoDados = req.body.locacao;

    // let criaLocacao;
    // // Cria locacao
    // try {
    //   criaLocacao = await locacaoClass.add(locacaoDados);
    // }
    // catch (error) {
    //   console.log(error);
    //   console.log("criar locacao");
    // }

    // // Busca locacao
    let getLocacao;
    try {
      getLocacao = await locacaoClass.getByClienteId(locacaoDados.clienteId);
      console.log("get locacao");
    }
    catch (error) {
      console.log(error);
      console.log("recebe locacao id");
    }

    // Cria relação cliente e locacao
    // let criaRelacoes
    // try {
    //   for (let i = 0; i < locacaoDados.produtoId.length; i++) {
    //     criaRelacoes = await locacaoProdutoClass.add(getLocacao, locacaoDados.produtoId[i]);
    //   }
    //   console.log("terminado");
    // }
    // catch (error) {
    //   console.log(error);
    //   console.log("cria relacação")
    // }

    // Cria relação locacao e produto
    let getRelacao
    try {
      getRelacao = await locacaoClass.getRelacao(getLocacao, locacaoDados.produtoId);
    }
    catch (error) {
      console.log(error);
      console.log("gera relação");
    }

    res.send(getRelacao);
  })

module.exports = locacao;