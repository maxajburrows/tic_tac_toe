
let gameBoard = (function () {
    let container = document.querySelector('.container');  
    for (let i = 1; i <= 9; i++) {
        let square = document.createElement('div');
        square.setAttribute('class', 'square');
        container.appendChild(square);
    }
})();

