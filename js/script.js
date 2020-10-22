

  var mailList = ["email1", "email2", "email3", "email4"];
  var email = prompt(" Ciao Inserisci la tua Email");
  var messaggio = document.getElementById("verifica");
  var emailTrovata = false;

 for (var i = 0; i < mailList.length; i++) {
  if (mailList[i] === email) {
    console.log("ciao");
  } else {
    console.log("registrati");
  }
}
document.getElementById("verifica").innerHTML = messaggio;
