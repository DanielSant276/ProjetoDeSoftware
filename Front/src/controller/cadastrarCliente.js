import $ from 'jquery';

export function cadastrarCliente(dados, irParaListaDeClientes, link) {
  $.post(link + "/clientes",
    {
      dados
    }, function (data, status) {
      if (data.mensagem == "Cliente existe") {
        alert("Cliente já cadastrado");
      }
      else if(data.mensagem == "Algo deu errado") {
        alert("Ocorreu um problema, contate o suporte");
      }
      else if (data.mensagem == "Cliente criado") {
        alert("Cliente criado com sucesso");
        irParaListaDeClientes();
      }
    })
}