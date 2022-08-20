const oddOrEven = require('./Q09-oddOrEven');
const num = require("./Q09-oddOrEven.json");

test('Verifica se tem algum valor não definido, vazio ou NaN', () => {
  for (let i = 0; i < num.value.numbers.length; i++) {
    expect(num.value.numbers[i] == undefined).not.toBeUndefined();
    expect(num.value.numbers[i] == null).not.toBeNull();
    expect(num.value.numbers[i] == NaN).not.toBeTruthy();
  }
});

test("Verifica se é um número os valores", () => {
  for (let i = 0; i < num.value.numbers.length; i++) {
    expect((typeof num.value.numbers[i]) == "number").toBeTruthy();
  }
});

test('Teste normal de cada caso', () => {
  for (let i = 0; i < num.value.numbers.length; i++) {
    expect(oddOrEven(num.value.numbers[i])).toBe(num.result.res[i]);
  }
});

test('Verifica se o json de teste e o json resultante está igual', () => {
  let validacao = []
  for (let i = 0; i < num.value.numbers.length; i++) {
    validacao.push(oddOrEven(num.value.numbers[i]));
  }

  expect(validacao).toEqual(num.result.res);
});


