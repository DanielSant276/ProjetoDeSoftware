const express = require('express');
const login = express.Router();

const SHA256 = require("../../sha");
const { usuarioClass } = require("../models/usuario.js");

login.route("/")
  .post(async function (req, res) {
    console.log(req.body.user);

    let user = {
      usuario: req.body.user.usuario,
      senha: SHA256.sha256ByDaniel(req.body.user.senha)
    }

    let verificaLogin = await usuarioClass.confereLogin(user.usuario, user.senha);

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