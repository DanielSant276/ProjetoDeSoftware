import $ from 'jquery';

export function cadastrarCliente(dados, link) {
  $.post(link + "/clientes",
    {
      dados
    }, function (data, status) {
      console.log(data);
    })
}