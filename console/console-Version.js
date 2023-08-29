const Gameboard = (() => {
    const gameBoard = [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
    ];

    //print the board in the console
    const printBoard = () => {
        for (let i=0; i < gameBoard.length; i++) {
            console.log(gameBoard[i].join(' | '))
            if (i < 2) {
                console.log('------------')
            }
        }
    }
    return {gameBoard, printBoard};
    //Gameboard.printBoard() to print the board
})()


const Player = (marker) => {
    //this is the mark of the player (X/O)
    let playerData = {
        marker: marker
    };
    //mark the board with the chosen mark
    const mark = (row, column) => {
        //console.log(Gameboard.gameBoard[row][column])
        Gameboard.gameBoard[row][column] = playerData.marker;
    }

    return {
        getMarker: () => playerData.marker,
        mark
    }
}


const playerX = Player('X');
const playerO = Player('O');
let activePlayer = playerX;


const Gameflow = (() => {
    let round = 0;
    console.log(round);

    const gameLoop = (row, column) => {       
    
        activePlayer.mark(row, column);
        Gameboard.printBoard()
        if (Gameflow.winCondition()) {
            console.log(activePlayer.getMarker() + ' wins')
        } else if (!Gameflow.winCondition() && round === 8) {
            console.log('Tie')
        }
        activePlayer = activePlayer === 
        playerX ? playerO : playerX;
        console.log(activePlayer.getMarker());
        round++;
        console.log(round);
    }
    const winCondition = () => {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (
            Gameboard.gameBoard[i][0] !== '-' &&
            Gameboard.gameBoard[i][0] === Gameboard.gameBoard[i][1] &&
            Gameboard.gameBoard[i][1] === Gameboard.gameBoard[i][2]
        ) {
            return true;
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (
            Gameboard.gameBoard[0][i] !== '-' &&
            Gameboard.gameBoard[0][i] === Gameboard.gameBoard[1][i] &&
            Gameboard.gameBoard[1][i] === Gameboard.gameBoard[2][i]
        ) {
            return true;
        }
    }

    // Check diagonals
    if (
        Gameboard.gameBoard[0][0] !== '-' &&
        Gameboard.gameBoard[0][0] === Gameboard.gameBoard[1][1] &&
        Gameboard.gameBoard[1][1] === Gameboard.gameBoard[2][2]
    ) {
        return true;
    }

    if (
        Gameboard.gameBoard[0][2] !== '-' &&
        Gameboard.gameBoard[0][2] === Gameboard.gameBoard[1][1] &&
        Gameboard.gameBoard[1][1] === Gameboard.gameBoard[2][0]
    ) {
        return true;
    }

    return false;
};
    return {gameLoop, winCondition};
})();