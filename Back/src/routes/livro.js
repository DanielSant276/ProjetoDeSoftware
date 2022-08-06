const express = require('express');
const path = require('path');
const livro = express.Router();

const generoClass = require('../models/Genero');

livro.route("/")
  .get(function (req, res) {
    res.sendFile(path.join(__dirname, "../", "/teste/livros.html"));
  })

  .post(async function (req, res) {
    console.log(req.body);
  })


module.exports = livro;