let palavraOriginal = "";
palavra = palavraOriginal.split("");
console.log(palavra)
let binarioArr = [];

// Passo 1 - passar para binário os caracteres da mensagem original
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
console.log(binarioArr);
//guarda esse valor para uso posterior
let tamanhoDaMensagemOriginal = binarioArr.length * binarioArr[0].length
console.log(tamanhoDaMensagemOriginal)

// Passo 2 - Inserir bits
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
console.log(binarioArr)

// Verificar essa parte
// Passo 3 - adicionar o tamanho da string original
function adicionarTamanhoDaMensagem(binarioArr, tamanhoMensagem) {
  let arr = binarioArr;
  // mesma coisa lá de cima mas agora para a quantidade de bits ocupados da mensagem original
  let tamanhoMensagemBinario = tamanhoMensagem.toString(2);
  console.log(tamanhoMensagemBinario);
  // verifica quantos bits são
  let comprimento = tamanhoMensagemBinario.length;
  //verifica quantos grupos de 8 bits são
  let tamanho = Math.ceil(tamanhoMensagemBinario.length / 8);

  // adciona a quantidade de zeros necessária para colocar as casas que faltam
  for (i = 0; i < (tamanho * 8) - comprimento; i++) {
    tamanhoMensagemBinario = "0" + tamanhoMensagemBinario;
  }
  console.log(tamanhoMensagemBinario);

  mensagemBinarioArr = []
  // separa em array a string das casas ocupadas
  for (i = 0; i < tamanho; i++) {
    mensagemBinarioArr.push(tamanhoMensagemBinario.slice(8 * i, 8 * i + 8));
  }
  // apenas para manter na mesma variável
  tamanhoMensagemBinario = mensagemBinarioArr;
  console.log(tamanhoMensagemBinario);

  // adiciona na array principal
  for (i = tamanho - 1, j = 0; i >= 0; i--, j++) {
    arr[binarioArr.length - 1 - j] = tamanhoMensagemBinario[i];
  }

  return arr;
}

console.log(tamanhoDaMensagemOriginal)
binarioArr = adicionarTamanhoDaMensagem(binarioArr, tamanhoDaMensagemOriginal);
console.log(binarioArr);

const h0 = "0x6a09e667"
const h1 = "0xbb67ae85"
const h2 = "0x3c6ef372"
const h3 = "0xa54ff53a"
const h4 = "0x510e527f"
const h5 = "0x9b05688c"
const h6 = "0x1f83d9ab"
const h7 = "0x5be0cd19"

const k = [
  "0x428a2f98", "0x71374491", "0xb5c0fbcf", "0xe9b5dba5", "0x3956c25b", "0x59f111f1", "0x923f82a4", "0xab1c5ed5",
  "0xd807aa98", "0x12835b01", "0x243185be", "0x550c7dc3", "0x72be5d74", "0x80deb1fe", "0x9bdc06a7", "0xc19bf174",
  "0xe49b69c1", "0xefbe4786", "0x0fc19dc6", "0x240ca1cc", "0x2de92c6f", "0x4a7484aa", "0x5cb0a9dc", "0x76f988da",
  "0x983e5152", "0xa831c66d", "0xb00327c8", "0xbf597fc7", "0xc6e00bf3", "0xd5a79147", "0x06ca6351", "0x14292967",
  "0x27b70a85", "0x2e1b2138", "0x4d2c6dfc", "0x53380d13", "0x650a7354", "0x766a0abb", "0x81c2c92e", "0x92722c85",
  "0xa2bfe8a1", "0xa81a664b", "0xc24b8b70", "0xc76c51a3", "0xd192e819", "0xd6990624", "0xf40e3585", "0x106aa070",
  "0x19a4c116", "0x1e376c08", "0x2748774c", "0x34b0bcb5", "0x391c0cb3", "0x4ed8aa4a", "0x5b9cca4f", "0x682e6ff3",
  "0x748f82ee", "0x78a5636f", "0x84c87814", "0x8cc70208", "0x90befffa", "0xa4506ceb", "0xbef9a3f7", "0xc67178f2",
]