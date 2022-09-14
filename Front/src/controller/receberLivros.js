import $ from 'jquery';

export function receberLivros(setlivro, link) {
  $.get(link + "/listarLivros")
    .done(async function (data, status) {
      let livros = data.data;
      
      await setlivro(livros);
    })
}