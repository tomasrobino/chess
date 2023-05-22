const { default: Two } = require("two.js");
const { default: Pawn } = require("./Pawn");
const { default: Rook } = require("./Rook");
const { default: Knight } = require("./Knight");
const { default: Bishop } = require("./Bishop");
const { default: Queen } = require("./Queen");
const { default: King } = require("./King");

import "./styles.css";

import pawnWhite from "./pawn.png";
import rookWhite from "./rook.png";
import knightWhite from "./knight.png";
import bishopWhite from "./bishop.png";
import queenWhite from "./queen.png";
import kingWhite from "./king.png";


import pawnBlack from "./pawn1.png";
import rookBlack from "./rook1.png";
import knightBlack from "./knight1.png";
import bishopBlack from "./bishop1.png";
import queenBlack from "./queen1.png";
import kingBlack from "./king1.png";

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
    //Add Pawns
    for (let i = 0; i < 8; i++) {
        b[1][i] = new Pawn(i, 1, "black");
        b[6][i] = new Pawn(i, 6, "white");
        
    }

    //Add Rooks
    b[0][0] = new Rook(0, 0, "black");
    b[0][7] = new Rook(7, 0, "black");
    b[7][0] = new Rook(0, 7, "white");
    b[7][7] = new Rook(7, 7, "white");

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
            let rect = two.makeRectangle(i*60 +90, k*60 +30, 60, 60);
            rect.fill = "burlywood";
            rect.noStroke();

            let rect2 = two.makeRectangle(i*60 +30, k*60 +90, 60, 60);
            rect2.fill = "burlywood";
            rect2.noStroke();
        }
    }

    for (let i=0; i<8; i++) {
        for (let k=0; k<8; k++) {
            let b = locBoard[i][k];
            let g;
            if (b instanceof Pawn) {
                g = two.makeRectangle(i*60 +30, k*60 +30, 40, 40);
                if (b.player === "white") {
                    g.fill = new Two.Texture(pawnWhite);
                } else {
                    g.fill = new Two.Texture(pawnBlack);
                }
                
                g.noStroke();
                b.graphic = g;
            } else if (b instanceof Rook) {
                g = two.makeRectangle(i*60 +30, k*60 +30, 40, 40);
                if (b.player === "white") {
                    g.fill = new Two.Texture(rookWhite);
                } else {
                    g.fill = new Two.Texture(rookBlack);
                }
                g.noStroke();
                b.graphic = g;
            } else if (b instanceof Knight) {
                g = two.makeRectangle(i*60 +30, k*60 +30, 40, 40);
                if (b.player === "white") {
                    g.fill = new Two.Texture(knightWhite);
                } else {
                    g.fill = new Two.Texture(knightBlack);
                }
                g.noStroke();
                b.graphic = g;
            } else if (b instanceof Bishop) {
                g = two.makeRectangle(i*60 +30, k*60 +30, 40, 40);
                if (b.player === "white") {
                    g.fill = new Two.Texture(bishopWhite);
                } else {
                    g.fill = new Two.Texture(bishopBlack);
                }
                g.noStroke();
                b.graphic = g;
            } else if (b instanceof Queen) {
                g = two.makeRectangle(i*60 +30, k*60 +30, 40, 40);
                if (b.player === "white") {
                    g.fill = new Two.Texture(queenWhite);
                } else {
                    g.fill = new Two.Texture(queenBlack);
                }
                g.noStroke();
                b.graphic = g;
            } else if (b instanceof King) {
                g = two.makeRectangle(i*60 +30, k*60 +30, 40, 40);
                if (b.player === "white") {
                    g.fill = new Two.Texture(kingWhite);
                } else {
                    g.fill = new Two.Texture(kingBlack);
                }
                g.noStroke();
                b.graphic = g;
            }
        }
    }
    
    two.update();
}

export var board = locBoard;