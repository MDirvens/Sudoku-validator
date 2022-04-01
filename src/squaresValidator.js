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
        var valid = this.methods.checkRows(this.methods.squareToRow(sudokuNumbers));

        return valid;  
    }
}

module.exports = SquaresValidator
