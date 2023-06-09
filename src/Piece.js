import { board, setBoard } from ".";

export default class Piece {
    player;
    x;
    y;
    graphic;
    targets = [];

    constructor(x, y, player) {
        //Making this class abstract
        if (this.constructor == Piece) {
            throw new Error("Piece class is abstract");
        }

        this.player = player;
        this.x = x;
        this.y = y;
    }

    checkMove() {
        throw new Error("checkMove() must be implemented");
    }

    kill() {
        //In future can make counter for dead pieces
        setBoard(this.y, this.x, 0)
    }

    move(targetX, targetY) {
        let square = board[targetY][targetX];

        if (square === "green" || square === "red") {
            square = this;
        }
        this.kill();
    }
}