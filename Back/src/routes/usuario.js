const express = require('express');
const path = require('path'); 
const usuario = express.Router();

const SHA256 = require("../../sha");
const usuarioClass = require("../models/usuario.js");

usuario.route("/")
  .get(function (req, res) {
    res.sendFile(path.join(__dirname, "../", "/teste/novaConta.html"));
  })

  .post(async function (req, res) {
    let usuarioDados = {
      login: req.body.user.usuario,
      senha: SHA256.sha256ByDaniel(req.body.user.senha),
      tipo: req.body.user.tipo
    }

    let novoUsuario = new usuarioClass.usuarioClass(usuarioDados.login, usuarioDados.senha, usuarioDados.tipo);

    try {
      await novoUsuario.add(usuarioDados);
      res.send({ status: '200', mensagem: "Usuário criado", usuario: usuarioDados });
    } catch (error) {
      console.log(error);
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.send({ status: '403', mensagem: "Usuário existe" });
      } else {
        res.send({ status: '500', mensagem: "Algo deu errado" });
        console.log(error);
      }
    }
  })

module.exports = usuario;