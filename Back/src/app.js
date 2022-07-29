const express = require("express");
const app = express();
const bp = require("body-parser");
const crypto = require("crypto");
const SHA256 = require("../sha");

const cliente = require("./models/cliente.js");
const dependente = require("./models/dependente.js");
const clienteDependente = require("./models/clienteDependente.js");
const locacao = require("./models/locacao.js");
const clienteLocacao = require("./models/clienteLocacao.js");
const produto = require("./models/produto.js");
const locacaoProduto = require("./models/locacaoProduto.js");
const exemplar = require("./models/exemplar.js");
const produtoExemplar = require("./models/produtoExemplar.js");
const genero = require("./models/genero.js");
const produtoGenero = require("./models/produtoGenero.js");
const usuario = require("./models/usuario.js");

const models = [cliente.clienteModel, dependente.dependenteModel, clienteDependente.clienteDependenteModel, locacao.locacaoModel, clienteLocacao.clienteLocacaoModel, produto.produtoModel, locacaoProduto.locacaoProdutoModel, exemplar.exemplarModel, produtoExemplar.produtoExemplarModel, genero.generoModel, produtoGenero.produtoGeneroModel, usuario.usuarioModel];

app.use(bp.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  // console.log("metodo get");
  res.sendFile(__dirname + "/teste/login.html");
});

app.post("/", function (req, res) {
  console.log(req.body);

  let login = req.body.login;
  let password = req.body.senha;
  let key = req.body.key;

  let verificarVar = [login, password, key];
  for (i = 0; i < verificarVar.length; i++) {
    if (verificarVar[i].includes(">") || verificarVar[i].includes("<")) {
      res.send("Você usou um caracter invalido")
    }
  }

  let newPass = changePass(password, key);

  //Chama a criptografia de valores
  function changePass(pass, key) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"/*,"0","1","2","3","4","5","6","7","8","9"*/];

    console.log(isNaN(parseInt(key)));
    //Verifica se a chave é numérica ou textual, se for um espaço utiliza SHA256

    if (key == "") {
      // Se não informar uma chave utiliza a criptografia SHA256
      cryptoPass = encryptSHA256(pass);
      type = "hash";
    }
    else if (isNaN(parseInt(key))) {
      //Chave textual utiliza a cifra de Vigenère
      cryptoPass = changePassVigenere(pass, key.toUpperCase(), alphabet).join("");
      type = "vigenère";
    }
    else {
      // chave numérica utiliza cifra simples de substituição
      key = parseInt(key);
      cryptoPass = changePassNumberKey(pass, key, alphabet).join("");
      type = "substituição"
    }

    return cryptoPass;
  }

  function changePassVigenere(pass, key, alphabet) {
    let indexPass, indexKey;
    let cryptoPass = [];

    for (i = 0; i < pass.length; i++) {
      indexPass = alphabet.indexOf(pass[i]);
      indexKey = alphabet.indexOf(key[i % key.length]);

      if (indexPass + indexKey > alphabet.length) {
        cryptoPass[i] = alphabet[indexPass + indexKey - alphabet.length];
      }
      else {
        cryptoPass[i] = alphabet[indexPass + indexKey];
      }
    }
    return cryptoPass;
  }

  function changePassNumberKey(pass, key, alphabet) {
    let index;
    let cryptoPass = [];

    for (i = 0; i < pass.length; i++) {
      index = alphabet.indexOf(pass[i]);
      if (index + key >= alphabet.length) {
        cryptoPass[i] = alphabet[index + key - alphabet.length];
      }
      else {
        cryptoPass[i] = alphabet[index + key];
      }
      console.log(cryptoPass[i])
    }
    return cryptoPass;
  }

  function encryptSHA256(pass) {
    // const hash = crypto.createHash('sha256').update(pass).digest('hex');

    // let hashKey = "Livraria S.I."

    // let hash = crypto.createHmac("sha256", hashKey)
    //                  .update(pass)
    //                  .digest("hex");

    const hash = SHA256.sha256ByDaniel(pass);

    return hash;
  }

  res.send(`Olá ${login}, sua senha é ${password}, sua senha criptografada é ${newPass}, você utilizou a cifra de ${type}`);
});

//Somente uma requisição para criar as tabelas no banco de dados
app.get("/criar", function (req, res) {
  for (i = 0; i < models.length; i++) {
    models[i].sync({ force: true })
  }
  res.send("Terminado");
})

app.get("/criarUsuario", function (req, res) {
  res.sendFile(__dirname + "/teste/novaConta.html");
})

app.post("/criarUsuario", async function (req, res) {
  console.log(req.body);
  let usuarioDados = {
    login: req.body.user.usuario,
    senha: SHA256.sha256ByDaniel(req.body.user.senha),
    tipo: req.body.user.tipo
  }

  let novoUsuario = new usuario.usuarioClass(usuarioDados.login, usuarioDados.senha, usuarioDados.tipo);

  try {
    await novoUsuario.add(usuarioDados);
    res.json(user);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(403)
      res.send({ status: 'error', message: "Usuário existe" });
    } else {
      res.status(500)
      res.send({ status: 'error', message: "Algo deu errado" });
    }
  }
})

app.listen(3000, function () {
  console.log("Server iniciado!")
})