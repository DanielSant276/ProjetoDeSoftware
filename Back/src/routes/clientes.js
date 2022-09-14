const express = require('express');
const path = require('path');
const cliente = express.Router();
const db = require("../models/db.js");

const { clienteClass } = require("../models/cliente.js");
const { clienteDependenteClass } = require("../models/clienteDependente.js");
const { dependenteClass } = require("../models/dependente.js");


cliente.get("/relacoes", async function (req, res) {
  let relacoes = await clienteClass.BuscaTodasRelacoes();
  
  res.send({ data: relacoes });
})

cliente.route("/")
  .get(async function (req, res) {
    let clientes = await clienteClass.getAll();
    
    res.send({data: clientes});
  })

  .post(async function (req, res) {
    let clienteDados = req.body.dados;

    console.log(clienteDados)
    try {
      const result = await db.sequelize.transaction(async (t) => {
        // cria novo cliente
        let novoCliente = await clienteClass.add(clienteDados, t);

        if (clienteDados.dependente != "") {
          // verificar id do novo cliente criado
          let clienteID = await clienteClass.getOne(clienteDados.cpf, t);
          clienteID = clienteID[0].dataValues.idCliente;

          // cria o dependente
          let criaDependente = await dependenteClass.add(clienteDados, t);

          // verifica o id do dependente criado
          let dependenteID = await dependenteClass.getByResponsavelCPF(clienteDados, t);
          dependenteID = dependenteID[0].dataValues.idDependente;

          // cria a relação entre cliente e dependente
          let criaRelacao = await clienteDependenteClass.add(clienteID, dependenteID, t);
        }
      })

      res.send({ mensagem: "Cliente criado" });
    }
    catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.send({ status: '403', mensagem: "Cliente existe" });
      } else {
        console.log(error);
        res.send({ status: '500', mensagem: "Algo deu errado" });
      }
    }
  })


module.exports = cliente;