import $ from "jquery";

export function pegaInfo(link, id, setInfo) {
  let novoProduto;
  let modificarProduto;

  $.get(link + "/livros/" + id,
    {
      id
    },
    async function (data, status) {
      novoProduto = data.data;

      modificarProduto = montarObj(novoProduto);

      await setInfo(modificarProduto);
    }
  )
}

function montarObj(data) {
  let novoObj = {
    id: data[0][0].idProduto,
    titulo: data[0][0].tituloProduto,
    autor: data[0][0].autor,
    generos: data[1][0].idGenero,
    descricao: data[0][0].descricao,
    lancamento: data[0][0].lancamento,
    edicao: data[0][0].edicao,
    paginas: data[0][0].qtdPaginas,
    numExemplares: data[0][0].numExemplares
  }

  return novoObj;
}

export function editar(dados, link, irParaListaProdutos) {
  console.log("editar")
  $.ajax({
    url: link + "/livros/" + dados.id,
    method: "PUT",
    data: dados,
    success: function (data, status) {
      if(data.mensagem == "enviado") {
        alert("Produto editado");
        irParaListaProdutos();
      }
      else if(data.mensagem == "falha no envio") {
        alert("Erro na edição");
      }
      else {
        alert("Ocorreu algum erro na edição");
      }
    }
  });
}