// Inserisci un numero, se è pari stampa il numero,

var numero = parseInt(prompt("Inserisci un numero pari"));

while ( isNaN(numero)) {

    var numero = parseInt(prompt("Inserisci un numero pari"));

}

if (numero % 2 == 0) {
    
    console.log(numero);

} else {
    console.log(numero + 1);
}

// se è dispari stampa il numero successivo