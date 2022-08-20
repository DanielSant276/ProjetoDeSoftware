const hideEmail = require('./Q02-hideEmail');
const email = require("./Q02-hideEmail.json");

test('Verifica se tem algum valor nulo, não definido, vazio ou NaN', () => {
  for (let i = 0; i < email.emailNormal.email.length; i++) {
    expect(email.emailNormal.email[i] == undefined).not.toBeUndefined();
    expect(email.emailNormal.email[i] == null).not.toBeNull();
    expect(email.emailNormal.email[i] == 0).not.toBeTruthy();
  }
});

test("Verifica se é uma string os valores", () => {
  for (let i = 0; i < email.emailNormal.email.length; i++) {
    expect((typeof email.emailNormal.email[i]) == "string").toBeTruthy();
  }
});

test('Teste normal de cada caso', () => {
  for (let i = 0; i < email.emailNormal.email.length; i++) {
    expect(hideEmail(email.emailNormal.email[i])).toBe(email.emailCensura.email[i]);
  }
});

test('Verifica se o json de teste e o json resultante está igual', () => {
  let censuraArr = []
  for (let i = 0; i < email.emailNormal.email.length; i++) {
    censuraArr.push(hideEmail(email.emailNormal.email[i]));
  }

  expect(censuraArr).toEqual(email.emailCensura.email);
});


