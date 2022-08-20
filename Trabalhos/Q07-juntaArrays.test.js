const removeDuplicates = require("./Q07");
const array = require("./Q07.json");
console.log(array)



test('verifca se junta arrays sem repetir os termos', () => {
    for (let i = 0; i < array.arrayEntrada.array.length; i++) {
        expect(removeDuplicates(array.arrayEntrada.array[i][0], array.arrayEntrada.array[i][1]).toEqual(array.arraySaida.array[i]));
    }
});


test('verifica se tem valor nulo, não definido, vazio ou NaN', () => {
    for (let i = 0; i < array.arrayEntrada.array.length; i++) {
      expect(array.arrayEntrada.array[i] == undefined).not.toBeUndefined();
      expect(array.arrayEntrada.array[i] == null).not.toBeNull();
      expect(array.arrayEntrada.array[i] == 0).not.toBeTruthy();
      expect(array.arrayEntrada.array[i] == NaN).not.toBeTruthy();
    }
  });
  
  test('verifica se o json de teste e o json resultante está igual', () => {
    let newArr = []
    for (let i = 0; i < array.arrayEntrada.array.length; i++) {
      newArr.push(removeDuplicates(array.arrayEntrada.array[i][0], array.arrayEntrada.array[i][1]));
    }
  
    expect(newArr).toStrictEqual(array.arraySaida.array);
  }); 