import $ from 'jquery';

export function procuraLocacao(setLocacao, setLoading, id, link) {
  $.get(link + "/locacao/" + id,
    {
      id
    },
    async function (data, status) {
      let locacoes = data.data;

      verificaLocacao(locacoes, link);

      await setLocacao(locacoes);
      await setLoading(true);
    }
  ).fail(async function () {
    console.log("não conectado");
    let teste = [{
      createdAt: "2022-09-15T07:48:09.000Z",
      dataDevolucao: "2022-09-27T00:00:00.000Z",
      dataLocada: "2022-09-15T00:00:00.000Z",
      idCliente: 1,
      idLocacao: 10,
      idProdutos: [9, 10],
      locacaoEstado: "Locado",
      locacaoMulta: 0,
      locacaoPreço: 9.5,
      tituloProdutos: ['Teste s 5', 'Teste s 6'],
      updatedAt: "2022-09-15T07:48:09.000Z"
    },
    {
      createdAt: "2022-09-15T08:33:31.000Z",
      dataDevolucao: "2022-10-04T00:00:00.000Z",
      dataLocada: "2022-09-15T00:00:00.000Z",
      idCliente: 1,
      idLocacao: 11,
      idProdutos: [10, 11, 9],
      locacaoEstado: "Locado",
      locacaoMulta: 0,
      locacaoPreço: 13.5,
      tituloProdutos: ['Teste s 6', 'Teste s 8', 'Teste s 5'],
      updatedAt: "2022-09-15T08:33:31.000Z"
    }]

    await setLocacao(teste);
    await setLoading(true);
  });
}


async function verificaLocacao(locacoes, link) {
  // Para testar funcionamento do atraso
  // let dataFake = new Date("2022-09-30T09:43:45.541Z");

  for (let i = 0; i < locacoes.length; i++) {
    let dataAgora = new Date();
    let dataDevolucao = new Date(locacoes[i].dataDevolucao);
    if (dataAgora > dataDevolucao && locacoes[i].locacaoEstado == "Locado") {
      // Como a subtração vem em milissegundos, estou dividindo pela quantidade de 
      // milissegundos em um dia e arredondado para cima
      let tempoPassado = Math.ceil((dataAgora - dataDevolucao)/86400000);
      editarLocaco(locacoes[i], tempoPassado, link);
    }
  }
}

function editarLocaco(locacao, tempoPassado, link) {
  let locacaoComMulta = locacao;

  // Fórmula da multa é se está atrasado soma mais 5 reais, 
  // a cada 5 dias passados, soma mais 5 reais
  let multa = 5 + (Math.trunc((tempoPassado / 5)) * 5);

  locacaoComMulta.locacaoMulta = multa;
  locacaoComMulta.locacaoEstado = "Atrasado";

  $.ajax({
    url: link + "/locacao/" + locacaoComMulta.idLocacao,
    method: "PUT",
    data: locacaoComMulta,
    success: function (data, status) {
      console.log(data.mensagem);
    }
  });
}

export function devolverLocacao(id, link) {
  $.ajax({
    url: link + "/locacao/devolvido/" + id,
    method: "PUT",
    success: function (data, status) {
      console.log(data.mensagem);
    }
  });
  window.location.reload();
}