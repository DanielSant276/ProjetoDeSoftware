function hideEmail(email) {
  let emailArr = email.split("@");

  let emailArrLen = emailArr[0].length;

  let escondeChar = "";

  for (let i = 3; i < emailArrLen; i++) {
    escondeChar += "*";
  }

  let escondeEmail = emailArr[0].slice(0, 3) + escondeChar;

  emailFinal = escondeEmail + "@" + emailArr[1];

  return emailFinal;
}

module.exports = hideEmail;