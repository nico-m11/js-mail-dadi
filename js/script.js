var btn = document.getElementById("btn");
var mail = ["email1", "email2", "email3", "email4",];
var email = document.getElementById("email");
var messaggio =document.getElementById("verifica");

btn.addEventListener("click", function () {
  email === mail.value;

 for (var i = 0; i < mail.lenght; i++){

  if (mail[i] == email) {
    i = mail;
    messaggio.innerHTML = "Email Verificata"
  } else if (mail[i] != email) {
    messaggio.innerHTML = "Email non Verificata"
  }
}
})
