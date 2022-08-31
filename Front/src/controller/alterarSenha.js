import $ from 'jquery';

export function trocarSenha(usuario, senhaAntiga, repetirSenha, link) {
  if (senhaAntiga == repetirSenha) {
    let novoLogin = {
      usuario: usuario,
      senha: senha
    }

    $.post(link + "/livros",
      {
        novoLogin
      },
      function (data, status) {
        console.log(data);
        // Fazer chamada de callback para outra tela;
      }
    );
  }
  else {
    console.log("senhas não são iguais")
  }
}