import $ from 'jquery';

export function receberClientes(setCliente, link) {
  $.get(link + "/clientes")
    .done(async function (data, status) {
      let clientes = data.data;

      await setCliente(clientes);
    })
    .fail(async function (data, status) {
      let clientes = [{
        clienteCPF: "00000000000",
        clienteEndereco: "Rua Teste, Número 5",
        clienteNome: "josé da silva",
        clienteQtdLocada: 1,
        clienteTelefone: "21900000000",
        createdAt: "2022-08-12T02:01:08.000Z",
        idCliente: 1,
        updatedAt: "2022-08-12T02:01:08.000Z"
      }, {
        clienteCPF: "00100000000",
        clienteEndereco: "Rua Teste, Número 2",
        clienteNome: "jose fino da silva",
        clienteQtdLocada: 1,
        clienteTelefone: "21910000000",
        createdAt: "2022-08-12T02:01:08.000Z",
        idCliente: 2,
        updatedAt: "2022-08-12T02:01:08.000Z"
      }, {
        clienteCPF: "00000200000",
        clienteEndereco: "Rua Teste, Número 33",
        clienteNome: "jiovanna silve",
        clienteQtdLocada: 1,
        clienteTelefone: "21920000000",
        createdAt: "2022-08-12T02:01:08.000Z",
        idCliente: 3,
        updatedAt: "2022-08-12T02:01:08.000Z"
      }, {
        clienteCPF: "00000000300",
        clienteEndereco: "Rua Teste, Número 1",
        clienteNome: "johanna silva",
        clienteQtdLocada: 1,
        clienteTelefone: "21930000000",
        createdAt: "2022-08-12T02:01:08.000Z",
        idCliente: 4,
        updatedAt: "2022-08-12T02:01:08.000Z"
      }, {
        clienteCPF: "00000000004",
        clienteEndereco: "Rua Teste, Número 90",
        clienteNome: "josefina da silva",
        clienteQtdLocada: 1,
        clienteTelefone: "21940000000",
        createdAt: "2022-08-12T02:01:08.000Z",
        idCliente: 5,
        updatedAt: "2022-08-12T02:01:08.000Z"
      }, {
        clienteCPF: "121212121211",
        clienteEndereco: "Rua Teste do Teste",
        clienteNome: "Daniel",
        clienteQtdLocada: 0,
        clienteTelefone: "121212121212",
        createdAt: "2022-09-15T18:03:42.000Z",
        idCliente: 6,
        updatedAt: "2022-09-15T18:03:42.000Z"
      }, {
        clienteCPF: "12121212122",
        clienteEndereco: "Rua Teste do Teste",
        clienteNome: "Daniel",
        clienteQtdLocada: 0,
        clienteTelefone: "121212121212",
        createdAt: "2022-09-15T18:06:06.000Z",
        idCliente: 10,
        updatedAt: "2022-09-15T18:06:06.000Z"
      }];

      await setCliente(clientes);
    })
}