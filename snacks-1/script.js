// Il software deve chiedere per 5 volte all’utente di inserire un numero.

var array = [];

for (var i = 1; i < 6; i++) {
    var numero = parseInt(prompt("dammi un numero!"));
    array.push(numero);
}


arrayTot = array.reduce((a, b) => a + b, 0)

console.log(arrayTot);


// Il programma stampa la somma di tutti i numeri inseriti.

// Esegui questo programma in due versioni, con il for e con il while.