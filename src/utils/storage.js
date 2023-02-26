export function saveGame(board, currentTurn, showWinner){
    window.localStorage.setItem("Board", JSON.stringify(board));
    window.localStorage.setItem("Turn", currentTurn);
    window.localStorage.setItem("ShowWinner", showWinner);
}

export function clearGame(){
    window.localStorage.removeItem("Board");
    window.localStorage.removeItem("Turn");
    window.localStorage.removeItem("ShowWinner");
}


export function getTurnStored(){
    return window.localStorage.getItem("Turn");
}


export function getBoardStored(){
    return JSON.parse(window.localStorage.getItem("Board"));
}

export function getShowWinnerStored(){
    return window.localStorage.getItem("ShowWinner")  === 'true';
}