const Methods = require("./methods");
    
class RowsValidator {
    constructor() {
        this.methods=new Methods;
    }

    static checkRows(sudoku) {
        const rows = new RowsValidator;
        return rows.checkRows(sudoku);
    }

    checkRows(sudoku) {
        let sudokuNumbers = this.methods.sudokuNumbers(sudoku);
        var valid = this.methods.checkRows(sudokuNumbers);
        return valid;
    }
}
  
module.exports = RowsValidator
