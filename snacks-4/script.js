// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari
var interi = [
    1, 2, 3, 4, 5, 6, 7, 8
];

var somma = 0;


for (var i = 0; i < interi.length; i++) {
    
    if (i % 2 == 1) {
        somma = somma + i;
    }

}

console.log(somma);