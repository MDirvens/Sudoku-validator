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

        return this.methods.checkRows(sudokuNumbers);
    }
}
  
module.exports = RowsValidator;
