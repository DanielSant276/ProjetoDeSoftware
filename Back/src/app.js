const express = require("express");
const app = express();
const bp = require("body-parser");
const cors = require('cors');

// const { clienteModel } = require("./models/cliente.js");
// const { dependenteModel } = require("./models/dependente.js");
// const { clienteDependenteModel } = require("./models/clienteDependente.js");
// const { locacaoModel } = require("./models/locacao.js");
// const { produtoModel } = require("./models/produto.js");
// const { locacaoProdutoModel } = require("./models/locacaoProduto.js");
// const { generoModel } = require("./models/genero.js");
// const { produtoGeneroModel } = require("./models/produtoGenero.js");
// const { usuarioModel } = require("./models/usuario.js");

// const models = [usuarioModel, clienteModel, dependenteModel, locacaoModel, produtoModel, generoModel, clienteDependenteModel, locacaoProdutoModel, produtoGeneroModel];

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
const corsOptions ={
  origin:'http://localhost:3000',
  credentials:true,
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

// Define a parte de router
const usuario = require("./routes/usuario");
const login = require("./routes/login");
const cliente = require("./routes/clientes");
const livro = require("./routes/livro");
const listarLivros = require("./routes/listarLivros");
const locacao = require("./routes/locacao");
// usado apenas para criar no banco de dados os gêneros, retirar depois
// const genero = require("./routes/genero");

const routes = require("./routes/index");

routes.use("/login", login);
routes.use("/criarUsuario", usuario);
routes.use("/clientes", cliente);
routes.use("/livros", livro);
routes.use("/listarLivros", listarLivros);
routes.use("/locacao", locacao);
// usado apenas para criar no banco de dados os gêneros, retirar depois
// routes.use("/genero", genero);


app.use(routes);

// Somente uma requisição para criar as tabelas no banco de dados
// app.get("/criar", function (req, res) {
//   for (i = 0; i < models.length; i++) {
//     models[i].sync({ force: true })
//   }
//   res.send("Terminado");
// })

app.listen(5000, function () {
  console.log("Server iniciado!");
})