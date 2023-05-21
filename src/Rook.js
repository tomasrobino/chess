import { board } from ".";

const { default: Piece } = require("./Piece");


export default class Rook extends Piece {
    checkMove() {
        if (this.player === "black") {
            if (this.y !== 7) { //Avoid Array index out of bounds
                //Check regular move
                if (board[this.y+1][this.x] === 0) {
                    //Paint green
                    board[this.y+1][this.x] = "green";

                    //Check double rook move
                    if (this.y === 1) {
                        if (board[this.y+2][this.x] === 0) {
                            //Paint green
                            board[this.y+2][this.x] = "green";
                        }
                    }
                }

                //Check eatable
                if (this.x !== 7) { //Avoid Array index out of bounds
                    if ( (board[this.y+1][this.x+1] instanceof Piece) && board[this.y+1][this.x+1].player !== this.player ) {
                        //Paint red
                        board[this.y+1][this.x+1] = "red";
                    }
                } else if (this.x !== 0) { //Avoid Array index out of bounds
                    if ( (board[this.y+1][this.x-1] instanceof Piece) && board[this.y+1][this.x-1].player !== this.player ) {
                        //Paint red
                        board[this.y+1][this.x-1] = "red";
                    }
                }
            }
        } else {
            if (this.y !== 0) { //Avoid Array index out of bounds
                //Check regular move
                if (board[this.y-1][this.x] === 0) {
                    //Paint green
                    board[this.y-1][this.x] = "green";

                    //Check double rook move
                    if (this.y === 6) {
                        if (board[this.y-2][this.x] === 0) {
                            //Paint green
                            board[this.y-2][this.x] = "green";
                        }
                    }
                }

                //Check eatable
                if (this.x !== 7) { //Avoid Array index out of bounds
                    if ( (board[this.y-1][this.x+1] instanceof Piece) && board[this.y-1][this.x+1].player !== this.player ) {
                        //Paint red
                        board[this.y-1][this.x+1] = "red";
                    }
                } else if (this.x !== 0) { //Avoid Array index out of bounds
                    if ( (board[this.y-1][this.x-1] instanceof Piece) && board[this.y-1][this.x-1].player !== this.player ) {
                        //Paint red
                        board[this.y-1][this.x-1] = "red";
                    }
                }
            }
        }
    }
}