import * as PIXI from 'pixi.js';

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
    //var two = new Two({fitted: true}).appendTo(mainDiv);
    var app = new PIXI.Application({ width: 480, height: 480, backgroundColor: 0xA52A2A });
    document.body.appendChild(app.view);
    

    //Draw board squares    
    for (let i=0; i<8; i+=2) {
        for (let k=0; k<8; k+=2) {
            let rect = PIXI.Sprite.from(PIXI.Texture.WHITE);
            rect.tint = 0xDEB887;
            rect.width = 60;
            rect.height = 60;
            rect.x = i*60 +60;
            rect.y = k*60;
            app.stage.addChild(rect);

            let rect2 = PIXI.Sprite.from(PIXI.Texture.WHITE);
            rect2.tint = 0xDEB887;
            rect2.width = 60;
            rect2.height = 60;
            rect2.x = i*60;
            rect2.y = k*60 +60;
            app.stage.addChild(rect2);
        }
    }

    //Drawn pieces' sprites
    for (let i=0; i<8; i++) {
        for (let k=0; k<8; k++) {
            let b = locBoard[i][k];
            let g;
            if (b !== 0) {
                let sprite;
                if (b instanceof Pawn) {
                    if (b.player === "white") {
                        sprite = PIXI.Sprite.from(pawnWhite);
                    } else {
                        sprite = PIXI.Sprite.from(pawnBlack);
                    }
                } else if (b instanceof Rook) {
                    if (b.player === "white") {
                        sprite = PIXI.Sprite.from(rookWhite);
                    } else {
                        sprite = PIXI.Sprite.from(rookBlack);
                    }
                } else if (b instanceof Knight) {
                    if (b.player === "white") {
                        sprite = PIXI.Sprite.from(knightWhite);
                    } else {
                        sprite = PIXI.Sprite.from(knightBlack);
                    }
                } else if (b instanceof Bishop) {
                    if (b.player === "white") {
                        sprite = PIXI.Sprite.from(bishopWhite);
                    } else {
                        sprite = PIXI.Sprite.from(bishopBlack);
                    }
                } else if (b instanceof Queen) {
                    if (b.player === "white") {
                        sprite = PIXI.Sprite.from(queenWhite);
                    } else {
                        sprite = PIXI.Sprite.from(queenBlack);
                    }
                } else if (b instanceof King) {
                    if (b.player === "white") {
                        sprite = PIXI.Sprite.from(kingWhite);
                    } else {
                        sprite = PIXI.Sprite.from(kingBlack);
                    }
                }

                sprite.x = i*60 +10;
                sprite.y = k*60 +10;
                sprite.eventMode = "static";
                sprite.on("mouseup", (event) => {
                    
                })
                app.stage.addChild(sprite);
            }
        }
    }
}

export var board = locBoard;