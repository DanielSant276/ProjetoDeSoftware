const express = require('express');
const path = require('path');
const cliente = express.Router();

const clienteCLass = require("../models/cliente.js");

cliente.route("/")
  .get(function (req, res) {
    res.sendFile(path.join(__dirname, "../", "/teste/clientes.html"));
  })

  .post(async function (req, res) {
    let clienteDados = {
      nome: req.body.cliente.nome,
      cpf: req.body.cliente.cpf,
      endereco: req.body.cliente.endereco,
      telefone: req.body.cliente.telefone,
      dependentes: req.body.cliente.dependentes
    }

    let novoCliente = new clienteCLass.clienteClass(clienteDados.nome, clienteDados.cpf, clienteDados.endereco, clienteDados.telefone, clienteDados.dependentes);

    try {
      novoCliente = await novoCliente.add(clienteDados);
      res.send({ mensagem: "Recebido e retornado", data: novoCliente });
    }
    catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.send({ status: '403', mensagem: "Usuário existe" });
      } else {
        console.log(error);
        res.send({ status: '500', mensagem: "Algo deu errado" });
      }
    }
  })


module.exports = cliente;