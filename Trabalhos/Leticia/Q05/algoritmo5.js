function adiciona_hifen(entrada){

  let resultado = '';

  for (let i = 0; i < entrada.length; i++){    
    if (i != 0){
      if (entrada[i] % 2 == 0 && entrada[i-1] % 2 == 0)
        resultado += '-';
    }
    resultado += entrada[i];
  }
  return resultado;
}

module.exports = adiciona_hifen;