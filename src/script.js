const mainDiv = document.getElementById("#mainDiv");
var board = [[0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0]];

function buildBoard() {
    //Add Rooks
    for (let i = 0; i < 8; i++) {
        new Rook(i, 1, "black");
        new Rook(i, 6, "white");
    }

    //Add Towers
    new Tower(0, 0, "black");
    new Tower(7, 0, "black");
    new Tower(0, 7, "white");
    new Tower(7, 7, "white");

    //Add Knights
    new Knight(1, 0, "black");
    new Knight(6, 0, "black");
    new Knight(1, 7, "white");
    new Knight(6, 7, "white");

    //Add Bishops
    new Bishop(2, 0, "black");
    new Bishop(5, 0, "black");
    new Bishop(2, 7, "white");
    new Bishop(5, 7, "white");

    //Add Kings
    new King(3, 0, "black");
    new King(3, 7, "white");

    //Add Queens
    new Queen(4, 0, "black");
    new Queen(4, 7, "white");
}

buildBoard();

console.log(board);