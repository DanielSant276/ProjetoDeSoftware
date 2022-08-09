const db = require("./db.js");

class Genero {
  static async add(nome) {
    let createGenero = await generoModel.create({
      nome: nome
    });

    return createGenero;
  }

  static async getAll() {
    const generos = await generoModel.findAll();
    return generos;
  }

  static async getGeneros(generos) {
    let generosArr = []
    for (let i = 0; i < 2; i++) {
      let generoPesquisa = await generoModel.findAll({
        where: {
          nome: generos[i]
        }
      });
      generosArr.push(generoPesquisa[0].dataValues.idGenero);
    }

    return generosArr;
  }
}

const generoModel = db.sequelize.define('generos', {
  idGenero: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  nome: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})

// Genero.sync({force: true});

module.exports = {
  generoClass: Genero,
  generoModel: generoModel
};