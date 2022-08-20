const inverterString = require('./algoritmo11');
const entrada = require("./algoritmo11.json");

test('Verifica se tem algum valor nulo, não definido, vazio ou NaN', () => {
  for (let i = 0; i < entrada.entradaDireita.entrada.length; i++) {
    expect(entrada.entradaDireita.entrada[i] == undefined).not.toBeUndefined();
    expect(entrada.entradaDireita.entrada[i] == null).not.toBeNull();
    expect(entrada.entradaDireita.entrada[i] == 0).not.toBeTruthy();
    expect(entrada.entradaDireita.entrada[i] == NaN).not.toBeTruthy();
  }
});

test("Verifica se é uma string os valores", () => {
  for (let i = 0; i < entrada.entradaDireita.entrada.length; i++) {
    expect((typeof entrada.entradaDireita.entrada[i]) == "string").toBeTruthy();
  }
});

test('Teste normal de cada caso', () => {
  for (let i = 0; i < entrada.entradaDireita.entrada.length; i++) {
    expect(inverterString(entrada.entradaDireita.entrada[i])).toBe(entrada.entradaInvertida.entrada[i]);
  }
});

test('Verifica se o json de teste e o json resultante está igual', () => {
  let ordenacao = []
  for (let i = 0; i < entrada.entradaDireita.entrada.length; i++) {
    ordenacao.push(inverterString(entrada.entradaDireita.entrada[i]));
  }

  expect(ordenacao).toEqual(entrada.entradaInvertida.entrada);
});


