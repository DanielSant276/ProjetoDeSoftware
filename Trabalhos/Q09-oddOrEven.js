function oddOrEven(number) {
  let numParaString = number.toString();

  numParaString = numParaString.split("");

  numParaString = sum(numParaString);

  if (numParaString % 2 == 0) {
    return "soma par";
  }
  return "soma ímpar";
}

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += parseInt(arr[i]);
  }

  return total;
}

module.exports = oddOrEven;