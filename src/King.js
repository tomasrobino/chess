import { board, setBoard } from ".";

const { default: Piece } = require("./Piece");

export default class King extends Piece {
    checkMove() {
        let list = [];
        let sel;

        if (this.y !== 7) {
            sel = board[this.y+1][this.x];
            if (sel === 0) {
                setBoard(this.y+1, this.x, 1);
                list.push([this.y+1, this.x]);
            } else if (sel.player !== this.player) {
                this.targets.push([this.y+1, this.x]);
            }
        }

        if (this.y !== 7 && this.x !== 7) {
            sel = board[this.y+1][this.x+1];
            if (sel === 0) {
                setBoard(this.y+1, this.x+1, 1);
                list.push([this.y+1, this.x+1]);
            } else if (sel.player !== this.player) {
                this.targets.push([this.y+1, this.x+1]);
            }
        }
        
        if (this.y !== 7 && this.x !== 0) {
            sel = board[this.y+1][this.x-1];
            if (sel === 0) {
                setBoard(this.y+1, this.x-1, 1);
                list.push([this.y+1, this.x-1]);
            } else if (sel.player !== this.player) {
                this.targets.push([this.y+1, this.x-1]);
            }
        }
        
        if (this.x !== 7) {
            sel = board[this.y][this.x+1];
            if (sel === 0) {
                setBoard(this.y, this.x+1, 1);
                list.push([this.y, this.x+1]);
            } else if (sel.player !== this.player) {
                this.targets.push([this.y, this.x+1]);
            }    
        }
        
        if (this.x !== 0) {
            sel = board[this.y][this.x-1];
            if (sel === 0) {
                setBoard(this.y, this.x-1, 1);
                list.push([this.y, this.x-1]);
            } else if (sel.player !== this.player) {
                this.targets.push([this.y, this.x-1]);
            }
        }
        
        if (this.y !== 0) {
            sel = board[this.y-1][this.x];
            if (sel === 0) {
                setBoard(this.y-1, this.x, 1);
                list.push([this.y-1, this.x]);
            } else if (sel.player !== this.player) {
                this.targets.push([this.y-1, this.x]);
            }
        }
        
        if (this.y !== 0 && this.x !== 7) {
            sel = board[this.y-1][this.x+1];
            if (sel === 0) {
                setBoard(this.y-1, this.x+1, 1);
                list.push([this.y-1, this.x+1]);
            } else if (sel.player !== this.player) {
                this.targets.push([this.y-1, this.x+1]);
            }
        }
        
        if (this.y !== 0 && this.x !== 0) {
            sel = board[this.y-1][this.x-1];
            if (sel === 0) {
                setBoard(this.y-1, this.x-1, 1);
                list.push([this.y-1, this.x-1]);
            } else if (sel.player !== this.player) {
                this.targets.push([this.y-1, this.x-1]);
            }
        }
        
        return list;
    }
}