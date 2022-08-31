const express = require('express');
const db = require("../models/db.js");
const path = require('path');
const usuario = express.Router();

const SHA256 = require("../../sha");
const { usuarioClass } = require("../models/usuario.js");

usuario.route("/")
  .post(async function (req, res) {
    let usuarioDados = {
      login: req.body.userData.usuario,
      senha: SHA256.sha256ByDaniel(req.body.userData.senha),
      tipo: "Gerente"
    }

    try {
      const result = await db.sequelize.transaction(async (t) => {
        await usuarioClass.add(usuarioDados, t);

        res.send({ status: '200', mensagem: "Usuário criado", usuario: usuarioDados });

      })
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