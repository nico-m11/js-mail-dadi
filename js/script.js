

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

// secondo esercizio

var puno = document.getElementById('puno');
var pdue = document.getElementById('pdue');
var btnG = document.getElementById('btnG');
var risultato = document.getElementById('risultato');

btnG.addEventListener("click", function () {
  document.getElementById('puno').innerHTML = Math.floor(Math.random("") * 5 + 1);
  document.getElementById('pdue').innerHTML = Math.floor(Math.random("") * 5 + 1);

  if (parseInt(puno.innerHTML) > parseInt(pdue.innerHTML)) {
    risultato.innerHTML = "You WIN Player One"
  } else if (parseInt(puno.innerHTML) < parseInt(pdue.innerHTML)) {
    risultato.innerHTML = "You WIN Player Due"
  } else {
    risultato.innerHTML = "Pareggio"
  }
})
