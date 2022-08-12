import $ from 'jquery';

export function receberGeneros(setGenerosOpcoes, link) {
  $.get(link + "/livros/generos",
    function (data, status) {
      let nomes = [];

      for (let i = 0; i < data.data.length; i++) {
        nomes.push(data.data[i].nome.charAt(0).toUpperCase() + data.data[i].nome.slice(1));
      }

      setGenerosOpcoes(nomes);
    }
  )
}

export function criarLivro(produto, link) {
  console.log(produto);
  $.post(link + "/livros",
    {
      produto
    },
    function (data, status) {
      console.log(data);
      // Fazer chamada de callback para outra tela;
    }
  );
}