// Crea un array di numeri interi
var interi = [
    1, 2, 3, 4, 5
];
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari

var somma = 0;

for (var i = 0; i < interi.length; i++) {
    
    if (i % 2 == 1) {
        
        somma = somma + interi[i];

    }

}

console.log(somma);