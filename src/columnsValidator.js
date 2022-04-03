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
        
        return this.methods.checkRows(this.methods.columnToRow(sudokuNumbers));
    }
}
  
module.exports = ColumnsValidator;
