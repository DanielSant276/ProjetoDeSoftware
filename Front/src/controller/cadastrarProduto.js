import $ from 'jquery';

export function receberGeneros(setGenerosOpcoes, link) {
  $.get(link + "/livros/generos",
    async function (data, status) {
      let nomes = [];

      for (let i = 0; i < data.data.length; i++) {
        nomes.push(data.data[i].nome.charAt(0).toUpperCase() + data.data[i].nome.slice(1));
      }

      await setGenerosOpcoes(nomes);
    }
  );
}

export function criarLivro(produto, link, irParaListaProdutos) {
  console.log(produto);
  $.post(link + "/livros",
    {
      produto
    },
    function (data, status) {
      if (data.mensagem == "Enviado com sucesso") {
        alert("Produto criado");
        irParaListaProdutos()
      }
      else if (data.mensagem == "Algo deu errado") {
        alert("Ocorreu algum erro");
      }
      else {
        alert("Ocorreu algum erro inesperado");
      }
    }
  );
}