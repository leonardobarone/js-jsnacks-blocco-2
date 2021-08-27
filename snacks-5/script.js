

// snack 5


// Crea due array che hanno un numero di elementi diversi.
var primoArray = [1, 2, 3];
var secondoArray = [1, 2, 3, 4, 5];

while (primoArray.length < secondoArray.length) {

    var random = Math.floor(Math.random() * 6);

    primoArray.push(random);

}

console.log(primoArray)


// Aggiungi elementi casuali all’array che ha meno elementi,


// fino a quando ne avrà tanti quanti l’altro.
