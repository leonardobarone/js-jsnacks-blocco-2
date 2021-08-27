// Crea un array di numeri interi
var interi = [
    1, 2, 2, 3, 4
];
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari

var somma = 0;

for (var i = 0; i < interi.length; i++) {
    
    if (interi[i] % 2 == 1) {
        
        somma = somma + interi[i];

    }

}

console.log(somma);