//Select the div elements of the gameboard
const gameboard = (() => {    
    const gameboardDivs = document.querySelectorAll('#gameboard > div')
    const gameboardDivArray = Array.from(gameboardDivs)
    return gameboardDivArray;
})()


const Player = (xo) => {
    const name = () => xo;
    //Mark X or Y depending on active player
    const marker = (xo) => {
        gameboard.forEach((mark) => {
            mark.addEventListener('click', () => {
                mark.textContent = xo;
                console.log(xo)
                gameLoop();
                // if (name === 'X') {
                //     ///change text of div to X
                //     mark.textContent = 'X';
                // } else {
                //     mark.textContent = 'O';
                //}
            })
        })
    }
    return {marker, name};
    //marker('X');
}
const xPlayer = Player('X');
const oPlayer = Player('O');


const gameLoop = (() => {
    console.log('start')
    let round = 0;
    let activePlayer = xPlayer;
    //console.log(activePlayer.marker('e'))
    return () => {
        round++;
        if (activePlayer === xPlayer) {
            activePlayer.marker('X');
            activePlayer = oPlayer;
        } else {
            oPlayer.marker();
            activePlayer = xPlayer;
        }
    };
})();
