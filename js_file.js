





let gameBoard = (function () {
    let arrayGameBoard = new Array(9).fill('');
    let container = document.querySelector('.container');  
    for (let i = 1; i <= 9; i++) {
        let square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.setAttribute('id', `${i}`);
        square.addEventListener('click', player().playerClick);
        container.appendChild(square);
    }
    let checkForGameEnd = function () {
        let row1 = arrayGameBoard.slice(0,3);
        let row2 = arrayGameBoard.slice(3,6);
        let row3 = arrayGameBoard.slice(6);

        if (row1.every(elem => elem === 'cross') || row2.every(elem => elem === 'cross') || row3.every(elem => elem === 'cross')
        || (row1[0] === 'cross' && row2[0] === 'cross' && row3[0] === 'cross')
        || (row1[1] === 'cross' && row2[1] === 'cross' && row3[1] === 'cross')
        || (row1[2] === 'cross' && row2[2] === 'cross' && row3[2] === 'cross')
        || (row2[1] === 'cross' && ((row1[0] === 'cross' && row3[2] === 'cross') || (row1[2] === 'cross' && row3[0])))) {
            console.log('Congratulations Player 1: YOU WIN!!!');
        } else if (row1.every(elem => elem === 'nought') || row2.every(elem => elem === 'cross') || row3.every(elem => elem === 'nought')
        || (row1[0] === 'nought' && row2[0] === 'nought' && row3[0] === 'nought')
        || (row1[1] === 'nought' && row2[1] === 'nought' && row3[1] === 'nought')
        || (row1[2] === 'nought' && row2[2] === 'nought' && row3[2] === 'nought')
        || (row2[1] === 'nought' && ((row1[0] === 'nought' && row3[2] === 'nought') || (row1[2] === 'nought' && row3[0])))) {
            console.log('Congratulations Player 2: YOU WIN!!!');
        } else if (arrayGameBoard.every(elem => elem == true)) {
            console.log('Gosh darn - it\'s a draw');
        }
    }

    let editBoard = function (player, squareNum) {
        if (player === 'playerOne') {
            arrayGameBoard[squareNum] = 'cross';
        } else if (player === 'playerTwo') {
            arrayGameBoard[squareNum] = 'nought';
        }
        checkForGameEnd();
    }
    return {arrayGameBoard, editBoard};
})();

function player () {
    let playerOneTurn = true;
    let playerTwoTurn = false;
    let playerClick = function () {
        if (playerOneTurn) {
            this.textContent = 'X';
            playerOneTurn = false;
            playerTwoTurn = true;
            gameBoard.editBoard('playerOne', this.id);
        }
        else {
            this.textContent = 'O';
            playerOneTurn = true;
            playerTwoTurn = false;
            gameBoard.editBoard('playerTwo', this.id);
        }
        this.removeEventListener('click', player().playerClick)
    }
    return {playerClick}
};