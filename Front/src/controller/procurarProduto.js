import $ from 'jquery';

export function receberLivros(setLivros, link) {
  $.get(link + "/livros")
    .done(async function (data, status) {
      let livros = data.data;

      await setLivros(livros);
    })
    .fail(async function (data, status) {
      let livros = [
        { idProduto: 1, tituloProduto: 'Teste1' },
        { idProduto: 2, tituloProduto: 'Teste2' },
        { idProduto: 3, tituloProduto: 'Teste3' },
        { idProduto: 4, tituloProduto: 'Teste4' },
        { idProduto: 5, tituloProduto: 'Teste5' },
        { idProduto: 6, tituloProduto: 'outroTeste1' },
        { idProduto: 7, tituloProduto: 'outroTeste2' },
        { idProduto: 8, tituloProduto: 'outroTeste3' },
        { idProduto: 9, tituloProduto: 'outroTeste4' },
        { idProduto: 10, tituloProduto: 'outroTeste5' },
      ]

      await setLivros(livros);
    })
}

export function deletarLivro(livroID, link) {
  $.ajax({
    url: link + "/livros/" + livroID,
    method: "DELETE",
    success: function (data, status) {
      if (data.mensagem == "deletado") {
        alert("Deletado com sucesso");
        window.location.reload();
      }
      else if (data.mensagem == "Produto precisa ser devolvido antes") {
        alert("Produto precisa ser devolvido antes de ser deletado");
      }
      else if (data.mensagem == "erro ao deletar o produto") {
        alert("Erro ao deletar o produto");
      }
      else {
        alert("Ocorreu um erro, contactar o suporte");
      }
    },
    error: function (error) {
      alert("Ocorreu um erro, contactar o suporte");
    }
  });
}