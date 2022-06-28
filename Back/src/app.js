const express = require("express");
const app = express();
const bp = require("body-parser");
const crypto = require("crypto");

app.use(bp.urlencoded({ extended: true })); 

app.get("/", function (req, res){
  console.log("metodo get");
  res.sendFile(__dirname + "/teste/index.html");
});

app.post("/", function (req, res){
  console.log(req.body);

  let login = req.body.login;
  let password = req.body.pass;
  let key = req.body.key;
  
  let newPass = changePass(password.toUpperCase(), key);

  //Chama a criptografia de valores
  function changePass (pass, key) {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];

    console.log(isNaN(parseInt(key)));
    //Verifica se a chave é numérica ou textual, se for um espaço utiliza SHA256
    if (key == "") {
      // Se não informar uma chave utiliza a criptografia SHA256
      cryptoPass = encryptSHA256(pass);
      type = "hash";
    }
    else if (isNaN(parseInt(key))) {
      //Chave textual utiliza a cifra de Vigenère
      cryptoPass = changePassVigenere(pass, key.toUpperCase(), alphabet).join("");
      type = "vigenère";
    }
    else {
      // chave numérica utiliza cifra simples de substituição
      key = parseInt(key);
      cryptoPass = changePassNumberKey(pass, key, alphabet).join("");
      type = "substituição"
    }
    
    return cryptoPass;
  }

  function changePassVigenere(pass, key, alphabet) {
    let indexPass, indexKey;
    let cryptoPass = [];

    for (i = 0; i < pass.length; i++) {
      indexPass = alphabet.indexOf(pass[i]);
      indexKey = alphabet.indexOf(key[i % key.length]);

      if (indexPass + indexKey > alphabet.length) {
        cryptoPass[i] = alphabet[indexPass + indexKey - alphabet.length]; 
      }
      else {
        cryptoPass[i] = alphabet[indexPass + indexKey]; 
      }
    }
    return cryptoPass;
  }

  function changePassNumberKey(pass, key, alphabet) {
    let index;
    let cryptoPass = [];

    for (i = 0; i < pass.length; i++) {
      index = alphabet.indexOf(pass[i]);
      if (index + key > alphabet.length) {
        cryptoPass[i] = alphabet[index + key - alphabet.length]; 
      }
      else {
        cryptoPass[i] = alphabet[index + key]; 
      }
    }
    return cryptoPass;
  }

  function encryptSHA256(pass) {
    let hashKey = "Livraria S.I."

    let hash = crypto.createHmac("sha256", hashKey)
                     .update(pass)
                     .digest("hex");
    return hash;
  }

  res.send(`Olá ${login}, sua senha é ${password}, sua senha criptografada é ${newPass}, você utilizou a cifra de ${type}`);
});

app.listen(3000, function() {
  console.log("Server iniciado!")
})