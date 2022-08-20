function getNPalavrasFrase(frase, n){
    return frase.split(" ").slice(0, n).join(" ");
}

const jsonArr = require("./Q06-getNpalavrasfrases.json")

arr = []
for( let i = 0; i < jsonArr.entrada.array.length; i++ ){
    arr.push(getNPalavrasFrase(jsonArr.entrada.array[i],jsonArr.entrada.arrayN[i]))
}
console.log(arr)

module.exports = getNPalavrasFrase;