function getItemMaisFrequente(lista) {
  let item = { freq: 0 }
  for (var i of lista) {
    let qt = 0;
    for (var j of lista) {
      if (i == j) qt++
    }
    if (qt > item.freq) item = { freq: qt, valor: i }
  }
  return item;
}

module.exports = getItemMaisFrequente;