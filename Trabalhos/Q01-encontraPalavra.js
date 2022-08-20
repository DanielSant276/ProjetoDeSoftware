function buscaPalavra(string) {

let string = 'Hoje está nublado.';
let result = string.includes('Hoje');

    if (result) {
        return "Hoje";
    }
    return false;

}

module.exports = buscaPalavra;