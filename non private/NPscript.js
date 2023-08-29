//Select the div elements of the gameboard
const gameboard = (() => {    
    const gameboardDivs = document.querySelectorAll('#gameboard > div')
    const gameboardDivArray = Array.from(gameboardDivs)
    return gameboardDivArray;
})()


const Player = (xo) => {
    const name = () => xo;
    const marker = () => {
        gameboard.forEach((mark) => {
            mark.addEventListener('click', () => {
                mark.textContent = name();
                console.log(gameLoop.round);
                // console.log(gameLoop.nextRound());
                gameLoop.round++
                //activePlayer = gameLoop.activePlayer;
                //console.log(activePlayer.name())
            })
        })
    }
    return {name, marker};
}
const xPlayer = Player('X');
const oPlayer = Player('O');
let activePlayer = xPlayer;

const gameLoop = (() => {
    console.log('start')
    let round = 0;
    if (round <= 9)
        activePlayer.marker();
        
        console.log(activePlayer.name())
        //const nextRound = () => {
            
        if (activePlayer.name() === 'X') {
            activePlayer = oPlayer;
        } else {
            activePlayer = xPlayer;
        }
        //console.log(activePlayer.name())
        // return activePlayer;
    //}
    return {round, activePlayer};
})();

//const newActivePlayer = gameLoop.activePlayer.name(); // Call the function and get the new active player
//console.log(newActivePlayer);