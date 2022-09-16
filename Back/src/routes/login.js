const express = require('express');
const login = express.Router();

const { usuarioClass } = require("../models/usuario.js");

login.route("/")
  .post(async function (req, res) {
    console.log(req.body.user);

    let user = {
      usuario: req.body.user.usuario,
      senha: req.body.user.senha
    }

    let verificaLogin = await usuarioClass.confereLogin(user.usuario, user.senha);

    console.log(verificaLogin);

    if (verificaLogin.length == 1) {
      res.send({ mensagem: "Usuário validado" });
    }
    else {
      verificaLogin = await usuarioClass.confereUsuario(user.usuario);

      if (verificaLogin.length == 1) {
        res.send({ mensagem: "Senha incorreta" });
      }
      else {
        res.send({ mensagem: "Usuário não existe" });
      }
    }
  })

module.exports = login;