const express = require("express");
const app = express();
const bp = require("body-parser");

// const cliente = require("./models/cliente.js");
// const dependente = require("./models/dependente.js");
// const clienteDependente = require("./models/clienteDependente.js");
// const locacao = require("./models/locacao.js");
// const clienteLocacao = require("./models/clienteLocacao.js");
// const produto = require("./models/produto.js");
// const locacaoProduto = require("./models/locacaoProduto.js");
// const exemplar = require("./models/exemplar.js");
// const produtoExemplar = require("./models/produtoExemplar.js");
// const genero = require("./models/genero.js");
// const produtoGenero = require("./models/produtoGenero.js");
// const usuario = require("./models/usuario.js");

// const models = [clienteDependente.clienteDependenteModel];

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

// Define a parte de router
const usuario = require('./routes/usuario');
const login = require('./routes/login');
const cliente = require('./routes/clientes');

const routes = require('./routes/index');

routes.use('/login', login);
routes.use('/criarUsuario', usuario);
routes.use('/clientes', cliente);

app.use(routes);

//Somente uma requisição para criar as tabelas no banco de dados
// app.get("/criar", function (req, res) {
//   for (i = 0; i < models.length; i++) {
//     models[i].sync({ force: true })
//   }
//   res.send("Terminado");
// })

app.listen(3000, function () {
  console.log("Server iniciado!")
})