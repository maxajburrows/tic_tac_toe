


let player = (function () {
    let playerOneTurn = true;
    let playerTwoTurn = false;
    let playerClick = function () {
        if (playerOneTurn) {
            this.textContent = 'X';
            playerOneTurn = false;
            playerTwoTurn = true;
            editBoard('playerOne', this.id);
        }
        else {
            this.textContent = 'O';
            playerOneTurn = true;
            playerTwoTurn = false;
            editBoard('playerTwo', this.id);
        }
        this.removeEventListener('click', player.playerClick)
    }
    console.log(playerClick)

    return {playerClick}
})();

console.log(player);


let gameBoard = (function () {
    let arrayGameBoard = new Array(9).fill('');
    let container = document.querySelector('.container');  
    for (let i = 1; i <= 9; i++) {
        let square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.setAttribute('id', `${i}`);
        square.addEventListener('click', player.playerClick);
        container.appendChild(square);
    }
    let editBoard = function (player, squareNum) {
        if (player === 'playerOne') {
            arrayGameBoard[squareNum] = 'cross';
        } else if (player === 'playerTwo') {
            arrayGameBoard[squareNum] = 'nought';
        }
    }
    return {arrayGameBoard, editBoard};
})();