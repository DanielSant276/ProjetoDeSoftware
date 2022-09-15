const express = require('express');
const path = require('path');
const locacao = express.Router();
const db = require("../models/db.js");

const { locacaoClass } = require("../models/Locacao");
const { locacaoProdutoClass } = require("../models/LocacaoProduto");

locacao.route("/:id")
  .get(async function (req, res) {
    let usuarioId = req.params.id

    let locacoes = await locacaoClass.getByClienteIdNoTransaction(usuarioId)
    let locacoesArr = []

    for (let i = 0; i < locacoes.length; i++) {
      let locacaoId = locacoes[i].dataValues.idLocacao;
      let produtos = await locacaoClass.getProdutos(locacaoId)
      let idProdutos = [];
      let tituloProdutos = [];

      for (let j = 0; j < produtos[i].length; j++) {
        idProdutos.push(produtos[i][j].idProduto);
        tituloProdutos.push(produtos[i][j].tituloProduto);
      }
      locacoes[i].dataValues.idProdutos = idProdutos;
      locacoes[i].dataValues.tituloProdutos = tituloProdutos;
    }

    res.send({ data: locacoes });
  })
  .put(async function (req, res) {
    let locacao = req.body

    try {
      const result = await db.sequelize.transaction(async (t) => {
        let modificaLocao = await locacaoClass.editarLocacao(locacao, t)
      })
      res.send({ mensagem: "alterado" });
    }
    catch (error) {
      console.log(error);
      res.send({ mensagem: "falha no envio" });
    }
  })

locacao.route("/")
  .get(async function (req, res) {
    // res.sendFile(path.join(__dirname, "../", "/teste/locacao.html"));
  })
  .post(async function (req, res) {
    let locacaoDados = req.body.locacao;

    try {
      const result = await db.sequelize.transaction(async (t) => {
        // Cria locacao
        let criaLocacao = await locacaoClass.add(locacaoDados, t);

        // Busca locacao
        let getLocacao = await locacaoClass.getByClienteId(locacaoDados.clienteId, t);

        // Cria relação cliente e locacao
        let criaRelacoes;
        for (let i = 0; i < locacaoDados.produtoId.length; i++) {
          criaRelacoes = await locacaoProdutoClass.add(getLocacao, locacaoDados.produtoId[i], t);
        }
      })
    }
    catch (error) {
      console.log("entrou no erro");
    }
  })

module.exports = locacao;