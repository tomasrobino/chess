const { default: Two } = require("two.js");
const { default: Rook } = require("./Rook");
const { default: Tower } = require("./Tower");
const { default: Knight } = require("./Knight");
const { default: Bishop } = require("./Bishop");
const { default: Queen } = require("./Queen");
const { default: King } = require("./King");

function buildBoard() {
    let b = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ]
    //Add Rooks
    for (let i = 0; i < 8; i++) {
        b[1][i] = new Rook(i, 1, "black");
        b[6][i] = new Rook(i, 6, "white");
        
    }

    //Add Towers
    b[0][0] = new Tower(0, 0, "black");
    b[0][7] = new Tower(7, 0, "black");
    b[7][0] = new Tower(0, 7, "white");
    b[7][7] = new Tower(7, 7, "white");

    //Add Knights
    b[0][1] = new Knight(1, 0, "black");
    b[0][6] = new Knight(6, 0, "black");
    b[7][1] = new Knight(1, 7, "white");
    b[7][6] = new Knight(6, 7, "white");

    //Add Bishops
    b[0][2] = new Bishop(2, 0, "black");
    b[0][5] = new Bishop(5, 0, "black");
    b[7][2] = new Bishop(2, 7, "white");
    b[7][5] = new Bishop(5, 7, "white");

    //Add Kings
    b[0][3] = new King(3, 0, "black");
    b[7][3] = new King(3, 7, "white");

    //Add Queens
    b[0][4] = new Queen(4, 0, "black");
    b[7][4] = new Queen(4, 7, "white");

    return b;
}

var locBoard = buildBoard();

window.onload = function() {
    //-----
    //Graphics
    //-----
    const mainDiv = document.getElementById("mainDiv");
    var two = new Two({fitted: true}).appendTo(mainDiv);

    for (let i=0; i<8; i+=2) {
        for (let k=0; k<8; k+=2) {
            let rect = two.makeRectangle(i*60 +30, k*60 +30, 60, 60);
            rect.fill = "white";
            rect.noStroke();

            let rect2 = two.makeRectangle(i*60 +90, k*60 +90, 60, 60);
            rect2.fill = "white";
            rect2.noStroke();
        }
    }

    for (let i=0; i<8; i+=2) {
        for (let k=0; k<8; k+=2) {
            
        }
    }
    
    two.update();
}

export var board = locBoard;