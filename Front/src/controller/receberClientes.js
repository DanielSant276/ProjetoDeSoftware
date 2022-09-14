import $ from 'jquery';

export function receberClientes(setCliente, link) {
  $.get(link + "/clientes")
    .done(async function (data, status) {
      let clientes = data.data;
      
      await setCliente(clientes);
    })
}