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
-collegare la difficoltà al numero delle celle
-generare una griglia del numero di celle stabilito
-assegnare a ogni cella un numero
*/

//FUNZIONI

function createCell () {
   const cell = document.createElement('div');
   cell.className = 'cell';
   return cell
}

//COSTANTI


const button = document.getElementById('play');
const grid = document.getElementById('grid');

let totalCellNumber = '';
let cellClass = '';

button.addEventListener('click', function() {
    const difficulty = parseInt(document.getElementById('difficulty').value);
    console.log(difficulty);
    //2
    if (difficulty === 1) {
        cellClass = 'cell-100';
        totalCellNumber = 100;

    } else if (difficulty ===2) {
        cellClass = 'cell-81';
        totalCellNumber = 81;
    } else {
        cellClass = 'cell-49';
        totalCellNumber= 49;
    }
    console.log(totalCellNumber);
    
    for (let i = 0; i < totalCellNumber; i++) {
        const cell = createCell();
        cell.setAttribute('id', i +1);
        cell.innerText = i + 1;
        cell.classList.add(cellClass);
        cell.addEventListener('click', () => {
            cell.classList.toggle('clicked');
        });
        grid.appendChild(cell);
    }

})