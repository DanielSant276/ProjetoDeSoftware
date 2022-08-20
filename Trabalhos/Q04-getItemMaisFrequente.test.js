const getItemMaisFrequente = require('./Q04-getItemMaisFrequente');
const valor = require("./Q04-getItemMaisFrequente.json");

test('Verifica se tem algum valor nulo, não definido, vazio ou NaN', () => {
  for (let i = 0; i < valor.entrada.array.length; i++) {
    expect(valor.entrada.array[i] == undefined).not.toBeUndefined();
    expect(valor.entrada.array[i] == null).not.toBeNull();
    expect(valor.entrada.array[i] == 0).not.toBeTruthy();
    expect(valor.entrada.array[i] == NaN).not.toBeTruthy();
  }
});

test("Verifica se é uma string os valores", () => {
  for (let i = 0; i < valor.entrada.array.length; i++) {
    expect((typeof valor.entrada.array[i]) == "string").toBeTruthy();
  }
});

test('Teste normal de cada caso', () => {
  for (let i = 0; i < valor.entrada.array.length; i++) {
    expect(getItemMaisFrequente(valor.entrada.array[i])).toStrictEqual(valor.saida.array[i]);
  }
});

test('Verifica se o json de teste e o json resultante está igual', () => {
  let censuraArr = []
  for (let i = 0; i < valor.entrada.array.length; i++) {
    censuraArr.push(getItemMaisFrequente(valor.entrada.array[i]));
  }

  expect(censuraArr).toEqual(valor.saida.array);
});


