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
var array2 = [];

while (i < 6) {

    var numero = parseInt(prompt("dammi un numero!"));
    array2.push(numero);

    i++
}

arrayTot2 = array2.reduce((a, b) => a + b, 0)

console.log(arrayTot2);
