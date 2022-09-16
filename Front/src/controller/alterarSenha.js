import $ from 'jquery';

export function trocarSenha(usuario, link, irParaHome) {
  // if (senhaAntiga == repetirSenha) {
  //   let novoLogin = {
  //     idUsuario: 1,
  //     usuario: usuario,
  //     senha: repetirSenha
  //   }

  //   $.ajax({
  //     url: link + "/criarUsuario",
  //     method: "PUT",
  //     data: novoLogin,
  //     success: function (data, status) {
  //       console.log(data);
  //       // carregarTabela();
  //     }
  //   });
  // }
  // else {
  //   console.log("senhas não são iguais")
  // }

  $.get(link + "/criarUsuario/" + usuario)
    .done(async function (data, status) {
      if (data.mensagem == "Usuario validadao") {
        alert("Entre em contato com o administrador para receber a nova senha");
        irParaHome()
      }
      else if (data.mensagem == "Usuario não cadastrado") {
        alert("Usuario não encontrado");
      }
      else {
        alert("Ocorreu um erro inesperado");
      }
    })
}