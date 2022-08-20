function inverterString(str) {
    var stringInvertida = "";
    for(var i = str.length - 1; i >= 0; i--) {
        stringInvertida = stringInvertida + str[i];
    }
    return stringInvertida;
}

module.exports = inverterString;