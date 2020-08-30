var bombe = 16;

do {
  var diffGioco = parseInt(prompt("Benvenuto su Campominato! Inserisci la difficoltà (0, 1 o 2) e... GLHF"));
  var beginningGame = false;
  if (diffGioco == 0) {
    var tentativi = 100;
    beginningGame = true;
  } else if (diffGioco == 1) {
    var tentativi = 80;
    beginningGame = true;
  } else if (diffGioco == 2) {
    var tentativi = 50;
    beginningGame = true;
  } else {
    alert("Inserisci una difficoltà per poter proseguire!");
  }
} while (beginningGame == false);

var possibilita = tentativi - bombe;


function random (max, min) {
  var numeroRandom = Math.floor(Math.random() * max) + min;
  return numeroRandom;
}

function check (array, numero) {
  if (numero.includes(array)) {
    return true;
  } else {
    return false;
  }
}

var numeroBombe = [];
do {
  var randomBombe = random(100, 1);
  check(randomBombe, numeroBombe);
  if (check(randomBombe, numeroBombe) == false) {
    numeroBombe.push(randomBombe);
  }
} while (numeroBombe.length != 16);
console.log("Le bombe sono posizionate qui: " + numeroBombe.sort());


var numeroUtente = [];
do {
  var inputUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  check(inputUtente, numeroUtente);
  if ((inputUtente < 1)|| (inputUtente > 100)) {
    alert("Inserisci solo numeri da 1 a 100!");
  } else if(isNaN(inputUtente)) {
    alert("Inserire solo valori numerici!");
  } else if (check(inputUtente, numeroUtente) == false) {
    numeroUtente.push(inputUtente);
  } else if (check(inputUtente, numeroUtente) == true){
    alert("Hai già inserito questo numero!");
  }
  if (check(inputUtente, numeroBombe) == true) {
    alert("HAI PERSO! Ne hai indovinate " + (numeroUtente.length - 1) + "!");
    break;
  }
} while (numeroUtente.length != possibilita);
console.log("Le tue posizioni sono: " + numeroUtente.sort());

if (numeroUtente.length == possibilita) {
  alert("HAI VINTO! Le hai indovinate tutte e " + possibilita + "!");
}
