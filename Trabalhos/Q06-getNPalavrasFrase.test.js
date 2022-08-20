const getNPalavrasFrase = require('./Q06-getNpalavrasfrases.json')
const valor = require('./Q06-getNpalavrasfrase.js')

test('Verifica se tem algum valor nulo, não definido, vazio ou NaN', () => {
  for (let i = 0; i < getNPalavrasFrase.entrada.array.length; i++) {
    expect(getNPalavrasFrase.entrada.array[i] == undefined).not.toBeUndefined();
    expect(getNPalavrasFrase.entrada.array[i] == null).not.toBeNull();
    expect(getNPalavrasFrase.entrada.array[i] == 0).not.toBeTruthy();
    expect(getNPalavrasFrase.entrada.array[i] == NaN).not.toBeTruthy();
  }
});

test("Verifica se é uma string os valores", () => {
  for (let i = 0; i < getNPalavrasFrase.entrada.array.length; i++) {
    expect((typeof getNPalavrasFrase.entrada.array[i]) == "string").toBeTruthy();
  }
});

test('Teste normal de cada caso', () => {
  for (let i = 0; i < getNPalavrasFrase.entrada.array.length; i++) {
    expect(valor(getNPalavrasFrase.entrada.array[i], getNPalavrasFrase.entrada.arrayN[i]));
  }
});

test('Verifica se o json de teste e o json resultante está igual', () => {
  let valorArr = []
  for (let i = 0; i < getNPalavrasFrase.entrada.array.length; i++) {
    valorArr.push(valor(getNPalavrasFrase.entrada.array[i], getNPalavrasFrase.entrada.arrayN[i]));
  }

  expect(valorArr).toEqual(getNPalavrasFrase.saida.array);
});