const express = require('express');
const path = require('path');
const locacao = express.Router();
const db = require("../models/db.js");

const { locacaoClass } = require("../models/Locacao");
const { locacaoProdutoClass } = require("../models/LocacaoProduto");

locacao.route("/:id")
  .get(async function (req, res) {

  })
  .put(async function (req, res) {

  })

locacao.route("/")
  .get(async function (req, res) {
    res.sendFile(path.join(__dirname, "../", "/teste/locacao.html"));
  })
  .post(async function (req, res) {
    let locacaoDados = req.body.locacao;

    try {
      const result = await db.sequelize.transaction(async (t) => {
        // Cria locacao
        let criaLocacao = await locacaoClass.add(locacaoDados, t);

        // Busca locacao
        let getLocacao = await locacaoClass.getByClienteId(locacaoDados.clienteId, t);
        console.log(getLocacao);

        // Cria relação cliente e locacao
        let criaRelacoes;
        for (let i = 0; i < locacaoDados.produtoId.length; i++) {
          criaRelacoes = await locacaoProdutoClass.add(getLocacao, locacaoDados.produtoId[i], t);
        }
        console.log(criaRelacoes)

        // Cria relação locacao e produto
        let getRelacao = await locacaoClass.getRelacao(locacaoDados.clienteId, t);
        console.log(getRelacao);
      })
    }
    catch (error) {
      console.log("entrou no erro");
    }

    // 
    // let getRelacao
    // try {
    //   
    // }
    // catch (error) {
    //   console.log(error);
    //   console.log("gera relação");
    // }

    // res.send(getRelacao);
  })

module.exports = locacao;