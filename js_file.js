


let gameBoard = (function () {
    let arrayGameBoard = new Array(9).fill('empty');
    let container = document.querySelector('.container');  
    for (let i = 1; i <= 9; i++) {
        let square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.setAttribute('id', `${i}`);
        square.addEventListener('click', player.playerClick)
        container.appendChild(square);
    }
    return {arrayGameBoard};
})();


let player = function () {
    let playerOneTurn = true;
    let playerTwoTurn = false;
    let playerClick = function () {
        if (playerOneTurn) {
            this.textContent = 'X';
            playerOneTurn = false;
            playerTwoTurn = true;
        }
        else {
            this.textContent = 'O';
            playerOneTurn = true;
            playerTwoTurn = false;
        }
        this.removeEventListener('click', player.playerClick)

    }

    return {playerClick}
}