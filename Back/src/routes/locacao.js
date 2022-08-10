const express = require('express');
const path = require('path');
const locacao = express.Router();

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
    res.send();
  })

module.exports = locacao;