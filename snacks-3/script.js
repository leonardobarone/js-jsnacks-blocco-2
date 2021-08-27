// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var nomi = [
    "Marco",
    "Leonardo",
    "Antonio",
    "Dina",
    "Giuseppe",
    "Carmine",
    "Vincenzo",
    "Giovanna",
    "Francesco",
    "Matteo",
    "Salvatore",
    "Riccardo",
    "Aldo",
    "Giovanni",
    "Giacomo"
];


var cognomi = [
    "Barone",
    "Galli",
    "Martino",
    "Primario",
    "Rossi",
    "Trapanese",
    "Potere",
    "Fumagalli",
    "De Sanctis",
    "Madrigali",
    "Storti",
    "Baglio",
    "Poretti"
];

let listaInvitati = [];

for (var i = 0; i < 3; i++) {

    var nomeCasuale = Math.floor(Math.random()*nomi.length)
    var cognomeCasuale = Math.floor(Math.random()*cognomi.length)

    console.log(`${(nomi[nomeCasuale])} ${(cognomi[cognomeCasuale])}`)

}

 
