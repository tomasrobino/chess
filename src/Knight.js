import { board, setBoard } from ".";

const { default: Piece } = require("./Piece");

export default class Knight extends Piece {
    checkMove() {
        let list = [];
        let sel;

        if (this.y < 6 && this.x < 7) {
            sel = board[this.y+2][this.x+1];
            if (sel instanceof Piece && sel.player !== this.player) {
                this.targets.push([this.y+2, this.x+1]);
            } else if (sel === 0) {
                setBoard(this.y+2, this.x+1, 1);
                list.push([this.y+2, this.x+1]);
            }
        }

        if (this.y < 6 && this.x > 0) {
            sel = board[this.y+2][this.x-1];
            if (sel instanceof Piece && sel.player !== this.player) {
                this.targets.push([this.y+2, this.x-1]);
            } else if (sel === 0) {
                setBoard(this.y+2, this.x-1, 1);
                list.push([this.y+2, this.x-1]);
            }    
        }

        if (this.y > 1 && this.x < 7) {
            sel = board[this.y-2][this.x+1];
            if (sel instanceof Piece && sel.player !== this.player) {
                this.targets.push([this.y-2, this.x+1]);
            } else if (sel === 0) {
                setBoard(this.y-2, this.x+1, 1);
                list.push([this.y-2, this.x+1]);
            }
        }

        if (this.y > 1 && this.x > 0) {
            sel = board[this.y-2][this.x-1];
            if (sel instanceof Piece && sel.player !== this.player) {
                this.targets.push([this.y-2, this.x-1]);
            } else if (sel === 0) {
                setBoard(this.y-2, this.x-1, 1);
                list.push([this.y-2, this.x-1]);
            }
        }

        if (this.y < 7 && this.x < 6) {
            sel = board[this.y+1][this.x+2];
            if (sel instanceof Piece && sel.player !== this.player) {
                this.targets.push([this.y+1, this.x+2]);
            } else if (sel === 0) {
                setBoard(this.y+1, this.x+2, 1);
                list.push([this.y+1, this.x+2]);
            }
        }

        if (this.y < 7 && this.x > 1) {
            sel = board[this.y+1][this.x-2];
            if (sel instanceof Piece && sel.player !== this.player) {
                this.targets.push([this.y+1, this.x-2]);
            } else if (sel === 0) {
                setBoard(this.y+1, this.x-2, 1);
                list.push([this.y+1, this.x-2]);
            }
        }

        if (this.y > 0 && this.x < 6) {
            sel = board[this.y-1][this.x+2];
            if (sel instanceof Piece && sel.player !== this.player) {
                this.targets.push([this.y-1, this.x+2]);
            } else if (sel === 0) {
                setBoard(this.y-1, this.x+2, 1);
                list.push([this.y-1, this.x+2]);
            }
        }

        if (this.y > 0 && this.x > 1) {
            sel = board[this.y-1][this.x-2];
            if (sel instanceof Piece && sel.player !== this.player) {
                this.targets.push([this.y-1, this.x-2]);
            } else if (sel === 0) {
                setBoard(this.y-1, this.x-2, 1);
                list.push([this.y-1, this.x-2]);
            }
        }

        return list;
    }
}