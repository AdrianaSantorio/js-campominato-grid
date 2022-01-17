/*
Consegna
L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

/*
-richiedere la difficoltà all' utente
-2collegare la difficoltà al numero delle celle
-generare una griglia del numero di celle stabilito

*/

//FUNZIONI

//COSTANTI

const button = document.getElementById('play');
let totalCellNumber = '';
const difficulty = parseInt(document.getElementById('difficulty').value);
console.log(difficulty);


button.addEventListener('click', function() {
    //2
    if (difficulty === 1) {
        totalCellNumber = 100;
    } else if (difficulty ===2) {
        totalCellNumber = 81;
    } else {
        totalCellNumber= 49;
    }

})