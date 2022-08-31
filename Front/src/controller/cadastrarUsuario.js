import $ from 'jquery';

export function cadastrarUsuario(userData, link, irParaCadastroCliente) {
  $.post(link + "/criarUsuario",
    {
      userData
    },
    function (data, status) {
      if (data.mensagem === "Usuário criado") {
        console.log("Acesso permitido, redirecionando ...");
        irParaCadastroCliente();
      }
      else if (data.mensagem === "Usuário existe") {
        console.log("Esse usuário já está sendo utilizado");
      }
      else {
        console.log("Ocorreu algum erro, contate o suporte ...");
      }
    })
}