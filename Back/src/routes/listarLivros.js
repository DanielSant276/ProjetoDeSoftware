const express = require('express');
const path = require('path');
const listarLivros = express.Router();

const { generoClass } = require('../models/Genero');
const { produtoClass } = require("../models/Produto");
const { produtoGeneroClass } = require("../models/ProdutoGenero");

// listarLivros.route("/livros")
//   .get(async function (req, res) {

//   })

listarLivros.route("/")
  .get(async function (req, res) {
    let livros = await produtoClass.getAll();

    let relacoes = []
    for (let i = 0; i < livros.length; i++) {
      let genero = await produtoClass.getRelacaoProdutoGenero(livros[i].dataValues.idProduto);
      relacoes.push([livros[i].dataValues, genero]);
    }

    res.send({ data: relacoes })
  })

module.exports = listarLivros;