//Select the div elements of the gameboard
const Board = (() => {    
    const gameboardDivs = document.querySelectorAll('#gameboard > div')
    const gameboardDivArray = Array.from(gameboardDivs)
    console.log(gameboardDivArray);
    return gameboardDivArray;
})()


const Player = (ox) => {
    const name = () => ox;
    return {name};
}
const xPlayer = Player('X');
const oPlayer = Player('O');
let activePlayer = xPlayer;

const gameLoop = (() => {
    console.log('start')
    // for (let round = 1; round <= 9, round++;) {

    
    //     if (activePlayer.name() === 'X') {
    //         activePlayer = oPlayer;
    //     } else {
    //         activePlayer = xPlayer;
    //     }
    // }

    // return {activePlayer};
})();
