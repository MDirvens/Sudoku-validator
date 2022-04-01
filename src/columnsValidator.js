const Methods = require("./methods");

class ColumnsValidator {
    constructor() {
        this.methods=new Methods;
    }
    
    static checkColumns(sudoku) {
        const columns = new ColumnsValidator;
        return columns.checkColumns(sudoku);
    }

    checkColumns(sudoku) {
        let sudokuNumbers = this.methods.sudokuNumbers(sudoku);
        var valid = this.methods.checkRows(this.methods.columnToRow(sudokuNumbers));
        
        return valid;
    }
}
  
module.exports = ColumnsValidator
