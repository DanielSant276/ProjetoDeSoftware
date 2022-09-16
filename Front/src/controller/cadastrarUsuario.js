import $ from 'jquery';
const SHA256 = require("./sha.js");

export function cadastrarUsuario(data, link, irParaMenu) {
  let userData  = data;
  userData.senha = SHA256.sha256ByDaniel(userData.senha);

  $.post(link + "/criarUsuario",
    {
      userData
    },
    function (data, status) {
      if (data.mensagem === "Usuário criado") {
        alert("Usuário criado com sucesso");
        irParaMenu();
      }
      else if (data.mensagem === "Usuário existe") {
        alert("Esse usuário já está sendo utilizado");
      }
      else {
        alert("Ocorreu algum erro, contate o suporte ...");
      }
    })
}