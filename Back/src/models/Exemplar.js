const db = require("./db.js");

class Exemplar {
  static async add(codigo) {
    let createExemplar;
    for (let i = 0; i < codigo.length; i++) {
      createExemplar = await exemplarModel.create({
        exemplarCodigo: codigo[i]
      });
    }

    return createExemplar;
  }

  static async getExemplares(codigo) {
    let exemplaresArr = []
    for (let i = 0; i < codigo.length; i++) {
      let exemplaresPesquisa = await exemplarModel.findAll({
        where: {
          exemplarCodigo: codigo[i]
        }
      });
      exemplaresArr.push(exemplaresPesquisa);
    }

    return exemplaresArr;
  }

  static async deletarExemplares(codigo) {
    for (let i = 0; i < codigo.length; i++) {
      deleteExemplar = await exemplarModel.destroy({
        where: {
          exemplarCodigo: codigo[i].idExemplar
        }
      });
    }
  }
}

const exemplarModel = db.sequelize.define('exemplares', {
  idExemplar: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  exemplarCodigo: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})

// Exemplar.sync({force: true});

module.exports = {
  exemplarClass: Exemplar,
  exemplarModel: exemplarModel
};