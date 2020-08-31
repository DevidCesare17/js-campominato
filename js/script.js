// FUNZIONI
// F-1. funzione che genera numeri random.
function random (max, min) {
  var numeroRandom = Math.floor(Math.random() * max) + min;
  return numeroRandom;
}

// F-2. funzione che controlla se un numero è già presente dentro un array.
function check (array, numero) {
  if (numero.includes(array)) {
    return true;
  } else {
    return false;
  }
}

// F-3. funzione che ordina con precisione i numeri da 1 a N.
function ordinamento (x, y) {
  return x - y;
}

// 1. Creazione variabile del numero di "bombe".
var bombe = 16;

// 2. creazione variabili difficoltà e impostazione di esse a seconda della decisione dell'utente.
var beginningGame = false;
var tentativi = "";
do {
  var diffGioco = parseInt(prompt("Benvenuto su Campominato! Inserisci la difficoltà (0, 1 o 2) e... GLHF"));
  switch (diffGioco) {
    case 0:
    tentativi = 100;
    beginningGame = true;
    break;
    case 1:
    tentativi = 80;
    beginningGame = true;
    break;
    case 2:
    tentativi = 50;
    beginningGame = true;
    break;
    default:
    alert("Inserisci una difficoltà per poter proseguire!");
    break;
  }
} while(beginningGame == false);

// 3. impostazione delle possibilità max dell'utente in base alla difficoltà scelta.
var possibilita = tentativi - bombe;

// 4. generazione della posizione casuale delle bombe per 16 volte e controllo se sono già dentro l'array della variabile scelta.
var numeroBombe = [];
do {
  var randomBombe = random(tentativi, 1);
  check(randomBombe, numeroBombe);
  if (check(randomBombe, numeroBombe) == false) {
    numeroBombe.push(randomBombe);
  }
} while (numeroBombe.length < 16);
console.log("Le bombe sono posizionate qui: " + numeroBombe.sort(ordinamento)); //==> console.log per controllo posizioni

// 5. chiedere all'utente di inserire un numero da 1 a 100 senza ripeterlo per il numero di possibilità calcolato in base alla difficoltà.
// Se il numero inserito non esiste nell'array delle bombe generate il gioco prosegue, altrimenti l'utente ha perso e il ciclo si interrompe stampando a video i vari risultati.
var numeroUtente = [];
var validator = false;
do {
  var inputUtente = parseInt(prompt("Inserisci un numero da 1 a " + tentativi));
  check(inputUtente, numeroUtente);
  if ((inputUtente < 1) || (inputUtente > tentativi)) {
    alert("Inserisci solo numeri da 1 a " + tentativi + "!");
  } else if(isNaN(inputUtente)) {
    alert("Inserire solo valori numerici!");
  } else if (check(inputUtente, numeroUtente) == false) {
    numeroUtente.push(inputUtente);
  } else if (check(inputUtente, numeroUtente) == true){
    alert("Hai già inserito questo numero!");
  }
  if (check(inputUtente, numeroBombe) == true) {
    validator = true;
    alert("HAI PERSO! Ne hai indovinate " + (numeroUtente.length - 1) + "!");
    alert("Hai preso la bomba nella posizione " + inputUtente);
  }
} while (numeroUtente.length < possibilita && validator == false);
console.log("Le tue posizioni sono: " + numeroUtente.sort(ordinamento));  //==> console.log per controllo input dell'utente

// 5.1. se i numeri inseriti dall'utente sono uguali alle possibilità faccio in modo che l'utente visualizzi tutte le posizioni indovinate e il messaggio di vittoria.
// (i numeri inseriti NON devono assolutamente essere uguali a quelli inseriti nella variabile numeroBombe[], quindi l'utente deve giocare TUTTE le sue possibilità senza sbagliare per vincere).
if (numeroUtente.length == possibilita) {
  alert("HAI VINTO! Le hai indovinate tutte e " + possibilita + "!");
}
