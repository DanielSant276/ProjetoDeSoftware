function inverterString(str) {
    var stringInvertida = "";

// 1º parametro: variável recebe o valor do tamanho da string passada, começando da última letra ||
// 2º parametro: essa variável tem que ser maior ou igual a 0 
// 3º paramentro: vai reduzindo até acabar as letras
    for(var i = str.length - 1; i >= 0; i--) {
        stringInvertida = stringInvertida + str[i];
    }
    console.log(`"${stringInvertida}",`);
    return stringInvertida;
}

// teste = [
//     "547", "4964", "7786", "3562", "1649", "8844", "2023", "7143", "8111", "3747",
//     "2069","275", "9995", "654", "6193", "9344", "7760", "7422", "8920", "814",
//     "4216", "3148", "1648", "4294", "8432", "1827", "253", "6271", "8253", "3623",
//     "5888", "4640", "2006", "9693", "4728", "9154", "6030", "7492", "7541", "9926",
//     "7296", "7279", "6327", "2881", "9559", "9464", "4157", "8999", "1687", "7632"
// ]
// for (var i = 0; i <= teste.length-1; i++) {
//   inverterString(teste[i])
// }

module.exports = inverterString;