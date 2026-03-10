/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 7;
const num2 = 14;
if (num1 > num2) {
  console.log("il numero più grande è:", num1);
} else if (num1 < num2) {
  console.log("il numero più grande è:", num2);
} else {
  console.log("i numeri sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number = 7;
if (number !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 5;
let n2 = 15;
if (n1 % n2) {
  console.log("divisivile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n3 = 8;
const n4 = 5;
const n5 = 3;
if (n3 === 8 || n4 === 8) {
  console.log("il valore è 8");
}

if (n3 - n5 === n4)
  console.log(
    "qui facciamo l'addizione aggiungendo al risultato tra n3 e n5(5) un 3 e quindi farà:",
    n3 - n5 + 3,
  );

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 70;
let spesaSpedizione = 10;
const sogliaSpedizioneGratuita = 50;
if (totalShoppingCart > 50) {
  spesaSpedizione = 0;
  console.log("spedizione gratuita");
} else {
  spesaSpedizione = 10;
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart1 = 70;
let spesaSpedizione1 = 10;
const sogliaSpedizioneGratuita1 = 30;
const sconto = 0.2;

let totaleScontato = totalShoppingCart1 - totalShoppingCart1 * sconto;

if (totaleScontato >= sogliaSpedizioneGratuita1) {
  spesaSpedizione1 = 0;
  console.log("spedizione gratuita");
} else {
  console.log("spedizione a pagamento:10");
}
let totalCheckout = totaleScontato + spesaSpedizione1;
console.log("totale da pagare:", totalCheckout);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 7;
let b = 14;
let c = 9;

let primo, secondo, terzo;

// confronto per trovare il più grande
if (a >= b && a >= c) {
  primo = a;
  if (b >= c) {
    secondo = b;
    terzo = c;
  } else {
    secondo = c;
    terzo = b;
  }
} else if (b >= a && b >= c) {
  primo = b;
  if (a >= c) {
    secondo = a;
    terzo = c;
  } else {
    secondo = c;
    terzo = a;
  }
} else {
  // c è il più grande
  primo = c;
  if (a >= b) {
    secondo = a;
    terzo = b;
  } else {
    secondo = b;
    terzo = a;
  }
}

console.log("Ordine dal più grande al più piccolo:", primo, secondo, terzo);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valore = "hello";
if (typeof valore === "number") {
  console.log("il valore è un numero");
} else {
  console.log("Il valore non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let r = 7;
if (r % 2 === 0) {
  console.log("il numero è pari");
} else {
  console.log("ilnumero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};/*

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
  city: "Toronto",
};
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2];
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = [];
number1.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(number1);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
number1[9] = 100;
console.log(number1);
