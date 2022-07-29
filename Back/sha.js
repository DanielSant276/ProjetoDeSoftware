function sha256ByDaniel(word) {
  let palavraOriginal = word;
  palavra = palavraOriginal.split("");
  let binarioArr = [];

  // Passo 1.1 - passar para binário os caracteres da mensagem original
  function transformaEmBinario(palavra) {
    let palavraBin = []
    for (i = 0; i < palavra.length; i++) {
      // soma uma quantidade de casas decimais para fazer volume com o valor em binário de cada letra da string 
      // que será criptografada 
      valorBinario = ("00000000" + palavra[i].charCodeAt(0).toString(2))
      // separar os valores iniciais que são desnecessários e só ficar com os últimos 8 bits
      valorBinario = valorBinario.slice(valorBinario.length - 8, valorBinario.length)
      // coloca na array os valores binários em 8 bits
      palavraBin.push(valorBinario);
    }

    return palavraBin;
  }

  binarioArr = transformaEmBinario(palavra);
  //guarda esse valor para uso posterior
  let tamanhoDaMensagemOriginal = binarioArr.length * binarioArr[0].length

  // Passo 1.2 - Inserir bits
  function insereBits(arr) {
    let palavraBin = arr
    // Insere um 1 na cadeia anterior
    palavraBin.push("10000000")

    // número total de bits na array
    let counter = palavraBin.length * palavraBin[0].length;
    // flag para manter o loop rodando
    let parada = true;
    // flag para verificar a potencia do 512
    let n = 1;

    // inicio do loop
    while (parada) {
      // verifica se a quantidade de bits é diferente de (512 * n) - 64
      if (counter != (512 * n) - 64) {
        // caso seja, é necessário inserir mais bits
        palavraBin.push("00000000");
        // verifica novamente a quantidade de valores
        counter = palavraBin.length * palavraBin[0].length;

        // se o valor ultrapassar (512 * n) - 64 o n aumenta em mais um
        if (counter > (512 * n) - 64) {
          n++;
        }
      }
      else {
        // caso a quantidade de bits seja igual a (512 * n) - 64 não é mais necessário inserir 0
        parada = false;
      }
    }
    return palavraBin;
  }

  binarioArr = insereBits(binarioArr)

  // Verificar essa parte
  // Passo 1.3 - adicionar o tamanho da string original
  function adicionarTamanhoDaMensagem(binarioArr, tamanhoMensagem) {
    let arr = binarioArr;
    // mesma coisa lá de cima mas agora para a quantidade de bits ocupados da mensagem original
    let tamanhoMensagemBinario = tamanhoMensagem.toString(2);
    // verifica quantos bits são
    let comprimento = tamanhoMensagemBinario.length;


    // adciona a quantidade de zeros necessária para colocar as casas que faltam para 64 bits
    for (i = 0; i < 64 - comprimento; i++) {
      tamanhoMensagemBinario = "0" + tamanhoMensagemBinario;
    }


    mensagemBinarioArr = []
    // separa em array do comprimento em 8 grupos
    for (i = 0; i < 8; i++) {
      mensagemBinarioArr.push(tamanhoMensagemBinario.slice(8 * i, 8 * i + 8));
    }
    // apenas para manter na mesma variável
    tamanhoMensagemBinario = mensagemBinarioArr;


    // adiciona na array principal
    for (i = 0; i < mensagemBinarioArr.length; i++) {
      arr.push(tamanhoMensagemBinario[i]);
    }

    return arr;
  }

  binarioArr = adicionarTamanhoDaMensagem(binarioArr, tamanhoDaMensagemOriginal);

  // Passo 2 - inicializar as contantes
  // Constantes referentes aos primeiros 32 bits da multiplicação de 2^32 pela parte fracionária das raizes quadradas 
  // dos 8 primeiros números primos [2, 3, 5, 7, 11, 13, 17, 19]
  const h = [
    "6a09e667",
    "bb67ae85",
    "3c6ef372",
    "a54ff53a",
    "510e527f",
    "9b05688c",
    "1f83d9ab",
    "5be0cd19"
  ]

  // Constantes referentes aos primeiros 32 bits da multiplicação de 2^32 pela parte fracionária das raizes cúbicas
  // dos 64 primeiros números primos [0 ... 63]
  const k = [
    "428a2f98", "71374491", "b5c0fbcf", "e9b5dba5", "3956c25b", "59f111f1", "923f82a4", "ab1c5ed5",
    "d807aa98", "12835b01", "243185be", "550c7dc3", "72be5d74", "80deb1fe", "9bdc06a7", "c19bf174",
    "e49b69c1", "efbe4786", "0fc19dc6", "240ca1cc", "2de92c6f", "4a7484aa", "5cb0a9dc", "76f988da",
    "983e5152", "a831c66d", "b00327c8", "bf597fc7", "c6e00bf3", "d5a79147", "06ca6351", "14292967",
    "27b70a85", "2e1b2138", "4d2c6dfc", "53380d13", "650a7354", "766a0abb", "81c2c92e", "92722c85",
    "a2bfe8a1", "a81a664b", "c24b8b70", "c76c51a3", "d192e819", "d6990624", "f40e3585", "106aa070",
    "19a4c116", "1e376c08", "2748774c", "34b0bcb5", "391c0cb3", "4ed8aa4a", "5b9cca4f", "682e6ff3",
    "748f82ee", "78a5636f", "84c87814", "8cc70208", "90befffa", "a4506ceb", "bef9a3f7", "c67178f2",
  ]

  // Passo - 3.1: Reorganização da mensagem para formar 64 grupos de 32 bits
  function criarChunk(binarioArr) {
    let arr = binarioArr.join("");

    let arr32 = [];
    // reorganiza para cadeias de 32 bits
    for (i = 0; i < arr.length / 32; i++) {
      arr32.push(arr.slice(i * 32, (i * 32) + 32));
    }

    // insere a quantidade de cadeias que faltam para gerar 64 cadeias
    let zeros = "0";
    // gera a cadeia de 0s para facilitar o trabalho
    for (j = 0; j < 31; j++) {
      zeros += "0"
    }

    for (i = arr32.length; i < 64; i++) {
      arr32.push(zeros);
    }
    // mensagem final e tamanho
    return arr32;
  }
  
  // cadeia de chunk passa a ser referida como w
  let w = criarChunk(binarioArr)
  
  // Passo - 3.2: Funções de rotação a direita e shift a direita
  function rotacaoDireita(mensagem, tamanho) {
    // tira os n bits do final e bota no início
    let bitsSeparados = mensagem.slice(mensagem.length - tamanho, mensagem.length);
    let novaCadeia = mensagem.slice(0, mensagem.length - tamanho);
    novaCadeia = bitsSeparados + novaCadeia;
    
    return novaCadeia.padStart(32, "1");
  }

  function shiftDireito(mensagem, tamanho) {
    // empurra os bits n casas, inserindo 0 no inicio
    let bitsInseridos = "";
    for (l = 0; l < tamanho; l++) {
      bitsInseridos += "0";
    }
    let novaCadeia = bitsInseridos + mensagem;
    novaCadeia = novaCadeia.slice(0, novaCadeia.length - tamanho);
    
    return novaCadeia.padStart(32, "1");
  }

  // Utiliza as funções acima para fazer a troca dos valores
  function modificaValores(w) {
    // a troca dos valores se da na seguinte expressão W[i] = W[i-16] + s0 + W[i-7] + s1 onde, s0 e s1 seguem abaixo:
    // s0 = (w[i-15] rightrotate 7) xor (w[i-15] rightrotate 18) xor (w[i-15] rightshift 3)
    // s1 = (w[i- 2] rightrotate 17) xor (w[i- 2] rightrotate 19) xor (w[i- 2] rightshift 10)
    // o problema disso tudo é que os valores em binário se tornam muito grandes quando passados para int, dessa forma,
    // muitas trocas dessas acabaram retornando valores negativos por usarem o bit mais significativo da cadeia
    let novoW = w;
    for (i = 16, j = 0; i < w.length; i++, j++) {
      let s0, s1;
      // deu tanta dor de cabeça para chegar nisso aqui, basicamente, como é um valor muito grande, a intereção de XOR 
      // nessa parte quebra o valor dando um número negativo, porém, com BigInt a operação de XOR consegue ser 
      // realizada corretamente
      s0 = (BigInt('0b' + rotacaoDireita(w[i - 15], 7)) ^ BigInt('0b' + shiftDireito(w[i - 15], 3)) ^ BigInt('0b' + rotacaoDireita(w[i - 15], 18)));
      s1 = (BigInt('0b' + rotacaoDireita(w[i - 2], 17)) ^ BigInt('0b' + rotacaoDireita(w[i - 2], 19)) ^ BigInt('0b' + shiftDireito(w[i - 2], 10)));
      // apos achar o valor de s0 e s1 é aplicada a fórmula W[i] = W[i-16] + s0 + W[i-7] e desse valor, se retira o modulo
      // de 2^32
      let tamanhoBit = 32;
      novoW[i] = (((BigInt('0b' + w[i - 16]) + s0 + BigInt('0b' + w[i - 7]) + s1) % BigInt(2 ** 32)).toString(2)).padStart(tamanhoBit, 0).slice(-tamanhoBit);
    }
    return novoW
  }

  w = modificaValores(w);

  // Passo - 4: Compressão dos valores as constantes serão alteradas o tempo inteiro, enquanto são incrementadas no chunk
  // w, no final desse passo, teremos um conjunto de 8 valores binários.
  function compressao(w, constH, k) {
    let tamanhoBit = 32;
    // define as variáveis que ficarão sendo trocadas
    let a = BigInt('0x' + constH[0]).toString(2).padStart(tamanhoBit, 0).slice(-tamanhoBit);
    let b = BigInt('0x' + constH[1]).toString(2).padStart(tamanhoBit, 0).slice(-tamanhoBit);
    let c = BigInt('0x' + constH[2]).toString(2).padStart(tamanhoBit, 0).slice(-tamanhoBit);
    let d = BigInt('0x' + constH[3]).toString(2).padStart(tamanhoBit, 0).slice(-tamanhoBit);
    let e = BigInt('0x' + constH[4]).toString(2).padStart(tamanhoBit, 0).slice(-tamanhoBit);
    let f = BigInt('0x' + constH[5]).toString(2).padStart(tamanhoBit, 0).slice(-tamanhoBit);
    let g = BigInt('0x' + constH[6]).toString(2).padStart(tamanhoBit, 0).slice(-tamanhoBit);
    let h = BigInt('0x' + constH[7]).toString(2).padStart(tamanhoBit, 0).slice(-tamanhoBit);

    // realiza as seguintes operações
    // for i from 0 to 63
    //   S1 = (e rightrotate 6) xor (e rightrotate 11) xor (e rightrotate 25)
    //   ch = (e and f) xor ((not e) and g)
    //   temp1 = h + S1 + ch + k[i] + w[i]
    //   S0 = (a rightrotate 2) xor (a rightrotate 13) xor (a rightrotate 22)
    //   maj = (a and b) xor (a and c) xor (b and c)
    //   temp2 := S0 + maj
    //   h = g
    //   g = f
    //   f = e
    //   e = d + temp1
    //   d = c
    //   c = b
    //   b = a
    //   a = temp1 + temp2

    let s1, ch, chAnd, chNot, chNotAnd, temp1, s0, maj, majAB, majAC, majBC, temp2;
    for (i = 0; i < 64; i++) {
      s1 = BigInt('0b' + rotacaoDireita(e, 6)) ^ BigInt('0b' + rotacaoDireita(e, 11)) ^ BigInt('0b' + rotacaoDireita(e, 25));

      chAnd = ((BigInt('0b' + e) & BigInt('0b' + f)));

      // não consegui fazer a troca usando o not (~) então escrevi na mão
      chNot = e.split("");
      for (j = 0; j < chNot.length; j++) {
        if (chNot[j] == "1") {
          chNot[j] = 0;
        }
        else {
          chNot[j] = 1;
        }
      }
      chNot = chNot.join("");

      chNotAnd = BigInt('0b' + chNot) & BigInt('0b' + g);
      ch = (chAnd ^ chNotAnd).toString(2).padStart(tamanhoBit, 0).slice(-tamanhoBit)

      temp1 = BigInt('0b' + h) + s1 + BigInt('0b' + ch) + BigInt('0x' + k[i]) + BigInt('0b' + w[i])
      // sempre que realizar uma soma, é necessário trocar para o valor do módulo da soma
      temp1 = temp1 % BigInt(2 ** 32)

      s0 = BigInt('0b' + rotacaoDireita(a, 2)) ^ BigInt('0b' + rotacaoDireita(a, 13)) ^ BigInt('0b' + rotacaoDireita(a, 22))

      majAB = ((BigInt('0b' + a) & BigInt('0b' + b)))
      majAC = ((BigInt('0b' + a) & BigInt('0b' + c)))
      majBC = ((BigInt('0b' + b) & BigInt('0b' + c)))
      maj = (majAB ^ majAC ^ majBC)

      temp2 = s0 + maj
      // sempre que realizar uma soma, é necessário trocar para o valor do módulo da soma
      temp2 = temp2 % BigInt(2 ** 32)

      h = g
      g = f
      f = e
      e = (BigInt('0b' + d) + temp1).toString(2).padStart(tamanhoBit, 0).slice(-tamanhoBit)
      d = c
      c = b
      b = a
      a = (temp1 + temp2).toString(2).padStart(tamanhoBit, 0).slice(-tamanhoBit)
    }











    return [a, b, c, d, e, f, g, h];
  }

  let newH = compressao(w, h, k);

  // Passo - 5: Modificar os valores finais somando a constante h inicial com os valores de h do último passo
  function somarH(h, newH) {
    let tamanhoBit = 32;
    for (i = 0; i < h.length; i++) {
      h[i] = BigInt('0x' + h[i]) + BigInt('0b' + newH[i]);
      h[i] = (h[i] % BigInt(2 ** 32)).toString(2).padStart(tamanhoBit, 0).slice(-tamanhoBit);
    }
    return h;
  }

  newH = somarH(h, newH);

  // Passo - 6: Juntar todos os valores mas em hex
  function transformarHex(newH) {
    let hash = [];
    let temp;
    for (i = 0; i < newH.length; i++) {
      temp = BigInt('0b' + newH[i]).toString(16);
      hash.push(temp);
    }
    return hash.join("");
  }

  // Valor Final
  let hashFinal = transformarHex(newH);

  return hashFinal;
}

module.exports = { 
  sha256ByDaniel 
}