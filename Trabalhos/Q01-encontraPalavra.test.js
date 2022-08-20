const buscaPalavra = require('./Q01');
const frase = require("./Q01.json");
console.log(frase)


test('Verifica se tem valor nulo, não definido, vazio ou NaN', () => {
  for (let i = 0; i < frase.fraseEntrada.frase.length; i++) {
    expect(frase.fraseEntrada.frase[i] == undefined).not.toBeUndefined();
    expect(frase.fraseEntrada.frase[i] == null).not.toBeNull();
    expect(frase.fraseEntrada.frase[i] == 0).not.toBeTruthy();
    expect(frase.fraseEntrada.frase[i] == NaN).not.toBeTruthy();
  }
});

test("Verifica se é uma string os valores", () => {
  for (let i = 0; i < frase.fraseEntrada.frase.length; i++) {
    expect((typeof frase.fraseEntrada.frase[i]) == "string").toBeTruthy();
  }
});

test('Teste normal de cada caso', () => {
  for (let i = 0; i < frase.fraseEntrada.frase.length; i++) {
    expect(hideEmail(frase.fraseEntrada.frase[i])).toBe(frase.fraseSaida.frase[i]);
  }
});

test('Verifica se o json de teste e o json resultante está igual', () => {
  let newFrase = []
  for (let i = 0; i < frase.fraseEntrada.frase.length; i++) {
    newFrase.push(buscaPalavra(frase.fraseEntrada.frase[i]));
  }

  expect(newFrase).toEqual(frase.fraseSaida.frase);
});
