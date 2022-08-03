const express = require('express');
const path = require('path');
const login = express.Router();

const SHA256 = require("../../sha");
const usuarioClass = require("../models/usuario.js");

login.route("/")
  .get(function (req, res) {
    res.sendFile(path.join(__dirname, "../", "/teste/login.html"));
  })

  .post(async function (req, res) {
    console.log(req.body.user);

    let user = {
      usuario: req.body.user.usuario,
      senha: SHA256.sha256ByDaniel(req.body.user.senha)
    }

    let confereLogin = new usuarioClass.usuarioClass(user.usuario, user.senha);

    varificaLogin = await confereLogin.confereLogin(user.usuario, user.senha);

    if (varificaLogin.length == 1) {
      res.send({ mensagem: "Usuário validado" });
    }
    else {
      varificaLogin = await confereLogin.confereUsuario(user.usuario);

      if (varificaLogin.length == 1) {
        res.send({ mensagem: "Senha incorreta" });
      }
      else {
        res.send({ mensagem: "Usuário não existe" });
      }
    }
  })

module.exports = login;