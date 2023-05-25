import { board, setBoard } from ".";

const { default: Piece } = require("./Piece");

export default class Queen extends Piece {
    checkMove() {
        let list = [];
        let sel;

        for (let i = 1; i < 8-this.y; i++) {
            sel = board[this.y+i][this.x];
            if (sel instanceof Piece && sel.player === this.player) {
                break;
            } else if (sel === 0) {
                setBoard(this.y+i, this.x, 1);
                list.push([this.y+i, this.x]);
            } else {
                this.targets.push([this.y+i, this.x]);
                break;
            }
        }

        for (let i = 1; i < 8-this.y && i < 8-this.x; i++) {
            sel = board[this.y+i][this.x+i];
            if (sel instanceof Piece && sel.player === this.player) {
                break;
            } else if (sel === 0) {
                setBoard(this.y+i, this.x+i, 1);
                list.push([this.y+i, this.x+i]);
            } else {
                this.targets.push([this.y+i, this.x+i]);
                break;
            }
        }
        
        for (let i = 1; i < 8-this.y && i < this.x+1; i++) {
            sel = board[this.y+i][this.x-i];
            if (sel instanceof Piece && sel.player === this.player) {
                break;
            } else if (sel === 0) {
                setBoard(this.y+i, this.x-i, 1);
                list.push([this.y+i, this.x-i]);
            } else {
                this.targets.push([this.y+i, this.x-i]);
                break;
            }
        }
        
        for (let i = 1; i < 8-this.x; i++) {
            sel = board[this.y][this.x+i];
            if (sel instanceof Piece && sel.player === this.player) {
                break;
            } else if (sel === 0) {
                setBoard(this.y, this.x+i, 1);
                list.push([this.y, this.x+i]);
            } else {
                this.targets.push([this.y, this.x+i]);
                break;
            }
        }
        
        for (let i = 1; i < this.x+1; i++) {
            sel = board[this.y][this.x-i];
            if (sel instanceof Piece && sel.player === this.player) {
                break;
            } else if (sel === 0) {
                setBoard(this.y, this.x-i, 1);
                list.push([this.y, this.x-i]);
            } else {
                this.targets.push([this.y, this.x-i]);
                break;
            }
        }
        
        for (let i = 1; i < this.y+1; i++) {
            sel = board[this.y-i][this.x];
            if (sel instanceof Piece && sel.player === this.player) {
                break;
            } else if (sel === 0) {
                setBoard(this.y-i, this.x, 1);
                list.push([this.y-i, this.x]);
            } else {
                this.targets.push([this.y-i, this.x]);
                break;
            }
        }
        
        for (let i = 1; i < 8-this.x && i < this.y+1; i++) {
            sel = board[this.y-i][this.x+i];
            if (sel instanceof Piece && sel.player === this.player) {
                break;
            } else if (sel === 0) {
                setBoard(this.y-i, this.x+i, 1);
                list.push([this.y-i, this.x+i]);
            } else {
                this.targets.push([this.y-i, this.x+i]);
                break;
            }
        }
        
        for (let i = 1; i < this.x+1 && i < this.y+1; i++) {
            sel = board[this.y-i][this.x-i];
            if (sel instanceof Piece && sel.player === this.player) {
                break;
            } else if (sel === 0) {
                setBoard(this.y-i, this.x-i, 1);
                list.push([this.y-i, this.x-i]);
            } else {
                this.targets.push([this.y-i, this.x-i]);
                break;
            }
        }
        
        return list;
    }
}