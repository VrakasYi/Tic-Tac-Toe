const Gameboard = (() => {
    let startToken = false;

    const startButton = document.querySelector('.start')
    const restartButton = document.querySelector('.restart')

    
    //start button
    const start = () => {
        startToken = true;
    }
    
    //The gameboard
    const gameBoard = [
        ['*', '*', '*'],
        ['*', '*', '*'],
        ['*', '*', '*']
    ];
    
    
    //display the board in the DOM
    const boardContainer = document.querySelector('#gameboard')
    const displayBoard = () => {
        for (let i = 0; i < gameBoard.length; i++) {
            for (let j = 0; j < 3; j++) {
                let newCell = document.createElement('div')
                newCell.dataset.row = [i];
                newCell.dataset.column = [j];
                newCell.textContent = gameBoard[i][j];
                boardContainer.appendChild(newCell)
            }
        }
    }
    
    
    //Update cell
    const updateCell = (row, column, marker) => {
        gameBoard[row][column] = marker;
        const cellToUpdate = boardContainer.querySelector(`[data-row="${row}"][data-column="${column}"]`);
        cellToUpdate.textContent = marker;
    }
    
    
    // Function to execute when the page loads
    const init = () => {
        displayBoard(); // Call the displayBoard function
    };
    // Attach the init function to the DOMContentLoaded event
    document.addEventListener('DOMContentLoaded', init);
    
 
    //Reset the board to '*' and round to 0
    const restart = () => {
        for (let i = 0; i < gameBoard.length; i++) {
            for (let j = 0; j < 3; j++) {
                gameBoard[i][j] = '*';
                const boardRestart = boardContainer.querySelector(`[data-row="${i}"][data-column="${j}"]`);
                boardRestart.textContent = '*';
            }
        }
        Gameflow.resetRound();
    }
    
    
    restartButton.addEventListener('click', restart)
    startButton.addEventListener('click', start)


    return {gameBoard, updateCell,
        //expose a function to set the 'start' variable
        setStart: () => {
            startToken = false;
        },
        //expose a function to get the 'start' variable
        getStart: () => {
            return startToken;
        },
    };
})()


const Player = (marker, name) => {    
    //this is the mark of the player (X/O)
    let playerData = {
        name: name,
        marker: marker
    };
    
    
    //mark the board with the chosen mark
    const mark = (row, column) => {
        if (Gameboard.gameBoard[row][column] === '*') {
            Gameboard.updateCell(row, column, playerData.marker);
            Gameflow.incrementRound();
            //console.log(Gameflow.round);
        };
    };
    

    return {
        getMarker: () => playerData.marker,
        mark
    }
}


const Gameflow = (() => {
    const playerX = Player('X');
    const playerO = Player('O');
    let activePlayer = playerX;
    const boardContainer = document.querySelector('#gameboard');
    //const isGameStarted = Gameboard.getStart();
    
    let round = 0;

    function resetRound() {
        return round = 0;
    }
 
    const winCondition = () => {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (
            Gameboard.gameBoard[i][0] !== '*' &&
            Gameboard.gameBoard[i][0] === Gameboard.gameBoard[i][1] &&
            Gameboard.gameBoard[i][1] === Gameboard.gameBoard[i][2]
            ) {
                return true;
            };
        };
    

        // Check columns
        for (let i = 0; i < 3; i++) {
            if (
                Gameboard.gameBoard[0][i] !== '*' &&
                Gameboard.gameBoard[0][i] === Gameboard.gameBoard[1][i] &&
                Gameboard.gameBoard[1][i] === Gameboard.gameBoard[2][i]
                ) {
                    return true;
                };
            };
            
            // Check diagonals
            if (
                Gameboard.gameBoard[0][0] !== '*' &&
                Gameboard.gameBoard[0][0] === Gameboard.gameBoard[1][1] &&
                Gameboard.gameBoard[1][1] === Gameboard.gameBoard[2][2]
                ) {
                    return true;
            }
    
            if (
                Gameboard.gameBoard[0][2] !== '*' &&
                Gameboard.gameBoard[0][2] === Gameboard.gameBoard[1][1] &&
                Gameboard.gameBoard[1][1] === Gameboard.gameBoard[2][0]
                ) {
                    return true;
            }
        
        
        return false;
    };
    
    
    const gameLoop = (event) => {   
        console.log(`winCondition is ${winCondition()}, round is ${round}`);
        //console.log(isGameStarted)

        if (!winCondition() && Gameboard.getStart()) {
            const cell = event.target;
            const row = cell.dataset.row;
            const column = cell.dataset.column;
    
            activePlayer.mark(row, column);
            console.log(winCondition());
            console.log(round);
            //check for victory and announce victor else go next round
            if (winCondition()) {
                alert(activePlayer.getMarker() + ' wins')
                win = true;
            } else if (!winCondition() && round === 9) {
                alert('Tie');
            }
            activePlayer = activePlayer === 
            playerX ? playerO : playerX;
            console.log(activePlayer.getMarker());
        }
    }
    boardContainer.addEventListener('click', gameLoop);

    // const incrementRound = () => {
    //     round++;
    // };
    return {
        incrementRound () {round++},
        resetRound
    };
})();