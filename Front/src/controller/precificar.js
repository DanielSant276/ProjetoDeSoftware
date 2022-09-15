import $ from 'jquery';

export function precificar(produtos, setPreco) {
  // preenche parte do preço
  let valor;
  let quantidade = produtos.length

  if (quantidade === 1) {
    valor = 5.5
  }
  if (quantidade > 1) {
    valor = 5.5 + (quantidade - 1) * 4;
  }
  
  setPreco(valor.toFixed(2));
}

export function dataDefinicao(produtos, setDataAtual, setDataDevolucao) {
  // preenche data de devolução
  let dataLocada = new Date();
  dataLocada = dataLocada.toLocaleDateString();
  setDataAtual(dataLocada)

  // tempo fixo + tempo por livro adicional
  const tempoPadrao = 5 + (produtos.length - 1) * 7;
  let dataDevolucao = tempo(dataLocada, tempoPadrao);
  setDataDevolucao(dataDevolucao);
}

function tempo(data, tempo) {
  let dia = parseInt(data.slice(0, 2));
  let mes = parseInt(data.slice(3, 5));
  let ano = parseInt(data.slice(6));

  dia += tempo;

  let meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  if (ano % 4 === 0) {
    meses[1] = 29
  }

  if (dia > meses[mes - 1]) {
    dia -= meses[mes - 1];
    mes++;
  }

  if (mes > 12) {
    ano++;
    mes -= 12;
  }

  return ("0" + dia).slice(-2) + "/" + ("0" + mes).slice(-2) + "/" + ano;
}

export function adicionarMaisUmaSemana(dataDevolucao, setDataDevolucao, preco, setPreco) {
  let novaData = tempo(dataDevolucao, 7);
  setDataDevolucao(novaData);

  let valor = (parseFloat(preco) + 5.5).toFixed(2);
  setPreco(valor)
}

export function enviarParaBack(dataAtual, dataDevolucao, produtos, preco, link) {
  let dataLocada = dataAtual.slice(6) + "-" + dataAtual.slice(3, 5) + "-" + dataAtual.slice(0, 2);
  let dataFinal = dataDevolucao.slice(6) + "-" + dataDevolucao.slice(3, 5) + "-" + dataDevolucao.slice(0, 2);

  let produtoId = produtos

  for (let i = 0; i < produtoId.length; i++) {
    produtoId[i] = parseInt(produtoId[i])
  }

  let locacao = {
    locacaoMulta: 0,
    locacaoPreco: preco,
    dataDevolucao: dataFinal,
    dataLocada: dataLocada,
    locacaoEstado: "locado",
    clienteId: 1,
    produtoId: produtoId
  }

  $.post(link + "/locacao",
    {
      locacao
    },
    function (data, status) {
      console.log(data);
    }
  )
}