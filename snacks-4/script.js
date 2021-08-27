// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari
var interi = [
    3, 6, 9
];

var somma = 0;


for (var i = 0; i < interi.length; i++) {
    
    if (i % 2 == 1) {
        somma = somma + interi[i];
    }

}

console.log(somma);