const express = require('express');
// const path = require('path');
const genero = express.Router();

const generoClass = require('../models/Genero');

genero.route("/")
  .get(function (req, res) {
    let generoArr = ["fantasia", "ficção", "aventura", "policial", "horror", "romance", "infantil", "juvenil", "adulto", "biografia", "tecnico"]

    for (let i = 0; i < generoArr.length; i++) {
      try {
        generoClass.generoClass.add(generoArr[i])
      }
      catch (error) {
        console.log(error);
        console.log("primeiro try");
      }
    }

    try {
      let generos = generoClass.generoClass.getAll()
      res.send(generos);
    }
    catch (error) {
      console.log(error);
      console.log("segundo try");
    }

  })

  .post(async function (req, res) {

  })


module.exports = genero;