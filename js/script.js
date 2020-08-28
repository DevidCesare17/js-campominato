var bombe = 16;
var tentativi = 100;

function random(max, min){
  var numeroRandom = Math.floor(Math.random() * max) + min;
  return numeroRandom;
}

function check(numero, numeroArray) {
  if (numero != numeroArray) {
    numero.push(numeroArray);
  }
  return;
}

var numeriBomba = [];

for (var i = 0; i < bombe; i++) {
  var generatorBombe = random(100, 1);
  if (generatorBombe != numeriBomba[i]) {
    numeriBomba.push(generatorBombe);
  }
}

var inputUtente = []​;

var haiPerso = false;​

i = 0;
while (i < tentativi - bombe) {
  var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  if ((numeroUtente < 1) || (numeroUtente > 100)) {
    alert("Inserisci solo numeri da 1 a 100!");
  i++;
  }

  check(numeroUtente, inputUtente);
}

if (haiPerso == false) {
  alert("Hai vinto!");
  alert("Ecco i tuoi numeri corretti: " + numeroUtente.length);
}
