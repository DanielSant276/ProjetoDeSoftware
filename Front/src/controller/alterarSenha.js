import $ from 'jquery';

export function trocarSenha(usuario, senhaAntiga, repetirSenha, link) {
  if (senhaAntiga == repetirSenha) {
    let novoLogin = {
      idUsuario: 1,
      usuario: usuario,
      senha: repetirSenha
    }

    $.ajax({
      url: link + "/criarUsuario",
      method: "PUT",
      data: novoLogin,
      success: function (data, status) {
        console.log(data);
        // carregarTabela();
      }
    });
  }
  else {
    console.log("senhas não são iguais")
  }
}