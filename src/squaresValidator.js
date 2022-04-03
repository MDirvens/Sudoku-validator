const Methods = require("./methods");

class SquaresValidator {
    constructor() {
        this.methods=new Methods;
    }

    static checkSquares(sudoku) {
        const square = new SquaresValidator;
        
        return square.checkSquares(sudoku);
    }
        
    checkSquares(sudoku) {
        let sudokuNumbers = this.methods.sudokuNumbers(sudoku);

        return this.methods.checkRows(this.methods.squareToRow(sudokuNumbers));  
    }
}

module.exports = SquaresValidator;
