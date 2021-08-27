// Il software deve chiedere per 5 volte all’utente di inserire un numero.

// var array = [];

// for (var i = 1; i < 6; i++) {
//     var numero = parseInt(prompt("dammi un numero!"));
//     array.push(numero);
// }


// arrayTot = array.reduce((a, b) => a + b, 0)

// console.log(arrayTot);


// Il programma stampa la somma di tutti i numeri inseriti.

// Esegui questo programma in due versioni, con il for e con il while.

var i = 1;
var somma2 = 0;

while (i < 6) {

    var numero = parseInt(prompt("dammi un numero!"));

    somma2 += numero;

    i++
}

console.log(somma2);



// SOLUZIONE

// var somma = 0;
// somma = somma + numero;
// console.log(somma);

// while ( isNaN(numero) ) {
//     numero = parseInt(prompt("Attento! Devi inserire un numero!!!"));
// }