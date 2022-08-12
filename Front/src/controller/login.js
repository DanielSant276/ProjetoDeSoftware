import $ from 'jquery';

export function login(usuario, senha, link, goToAnotherPage) {
  let user = {
    usuario: usuario,
    senha: senha
  }

  if (user.usuario && user.senha) {
    $.post(link + "/login",
      {
        user
      },
      function (data, status) {
        if (data.mensagem === "Usuário validado") {
          console.log("Acesso permitido, redirecionando ...");
          goToAnotherPage();
        }
        else if (data.mensagem === "Senha incorreta") {
          console.log("Senha errada, tente novamente ...");
        }
        else if (data.mensagem === "Usuário não existe") {
          console.log("Usuário não cadastrado ...");
        }
        else {
          console.log("Ocorreu algum erro, contate o suporte ...");
        }
      })
  }
}

// gera a lógica para conferir se é um login válido
// function confereLogin() {
//
// }