const express = require('express');

const cliente = express.Router();

cliente.route("/clientes")
  .get(function (req, res) {
    res.sendFile(__dirname + "/teste/clientes.html");
  })

  


module.exports = cliente;