const express = require('express');
const db = require("../models/db.js");
const path = require('path');
const usuario = express.Router();

const SHA256 = require("../../sha");
const { usuarioClass } = require("../models/usuario.js");

usuario.route("/:usuario")
  .get(async function (req, res) {
    let login = req.params.usuario;
    
    let verificaUsuario = await usuarioClass.getByLogin(login);

    if (verificaUsuario.length == 1) {
      res.send({ mensagem: "Usuario validadao" });
    }
    else {
      console.log("entrou aqui")
      res.send({ mensagem: "Usuario não cadastrado" });
    }
  })

usuario.route("/")
  .post(async function (req, res) {
    let usuarioDados = {
      login: req.body.userData.usuario,
      senha: req.body.userData.senha,
      tipo: "Atendente"
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
  .put(async function (req, res) {
    let login = {
      idUsuario: 1, //Trocar essa parte aqui
      usuario: req.body.usuario,
      senha: req.body.senha
    }

    try {
      const result = await db.sequelize.transaction(async (t) => {
        await usuarioClass.modificaSenha(login, t);

        res.send({ status: '200', mensagem: "Senha alterada" });

      })
    } catch (error) {
      res.send({ status: '500', mensagem: "Algo deu errado" });
      console.log(error);
    }
    console.log(login)
  })

module.exports = usuario;