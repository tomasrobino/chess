import { board, setBoard } from ".";

const { default: Piece } = require("./Piece");


export default class Pawn extends Piece {
    checkMove() {
        let list = [];

        if (this.player === "black") {
            if (this.y !== 7) { //Avoid Array index out of bounds
                //Check regular move
                if (board[this.y+1][this.x] === 0) {
                    //Paint green
                    setBoard(this.y+1, this.x, 1);
                    list.push([this.y+1, this.x]);

                    //Check double rook move
                    if (this.y === 1) {
                        if (board[this.y+2][this.x] === 0) {
                            //Paint green
                            setBoard(this.y+2, this.x, 1);
                            list.push([this.y+2, this.x]);
                        }
                    }
                }

                //Check eatable
                if (this.x !== 7) { //Avoid Array index out of bounds
                    if ( (board[this.y+1][this.x+1] instanceof Piece) && board[this.y+1][this.x+1].player !== this.player ) {
                        //Paint red
                        //setBoard(this.y+1, this.x+1, 2);
                        //list.push([this.y+1, this.x+1, 2]);
                        this.targets.push([this.y+1, this.x+1]);
                    }
                }
                
                if (this.x !== 0) { //Avoid Array index out of bounds
                    if ( (board[this.y+1][this.x-1] instanceof Piece) && board[this.y+1][this.x-1].player !== this.player ) {
                        //Paint red
                        //setBoard(this.y+1, this.x-1, 2);
                        //list.push([this.y+1, this.x-1, 2]);
                        this.targets.push([this.y+1, this.x-1]);
                    }
                }
            }
        } else {
            if (this.y !== 0) { //Avoid Array index out of bounds
                //Check regular move
                if (board[this.y-1][this.x] === 0) {
                    //Paint green
                    setBoard(this.y-1, this.x, 1);
                    list.push([this.y-1, this.x]);
                    //Check double rook move
                    if (this.y === 6) {
                        if (board[this.y-2][this.x] === 0) {
                            //Paint green
                            setBoard(this.y-2, this.x, 1);
                            list.push([this.y-2, this.x]);
                        }
                    }
                }

                //Check eatable
                if (this.x !== 7) { //Avoid Array index out of bounds
                    if ( (board[this.y-1][this.x+1] instanceof Piece) && board[this.y-1][this.x+1].player !== this.player ) {
                        //Paint red
                        //setBoard(this.y-1, this.x+1, 2);
                        //list.push([this.y-1, this.x+1, 2]);
                        this.targets.push([this.y-1, this.x+1]);
                    }
                }
                
                if (this.x !== 0) { //Avoid Array index out of bounds
                    if ( (board[this.y-1][this.x-1] instanceof Piece) && board[this.y-1][this.x-1].player !== this.player ) {
                        //Paint red
                        //setBoard(this.y-1, this.x-1, 2);
                        //list.push([this.y-1, this.x+1, 2]);
                        this.targets.push([this.y-1, this.x+1]);
                    }
                }
            }
        }
        return list;
    }
}