const RowsValidator = require("./rowsValidator");
const ColumnsValidator = require("./columnsValidator");
const SquaresValidator = require("./squaresvalidator");

class Validator {
    static validate(sudoku) {
        const validator = new Validator;
        return validator.validate(validator.isValid(sudoku), sudoku)
    }

    validate(valid, sudoku) {
        if (valid){
            if(!sudoku.includes('0')){
                return 'Sudoku is valid.';
            } 
            else{
                return 'Sudoku is valid but incomplete.';
            }
        }
        if (!valid){
          return 'Sudoku is invalid.';
        }
    }

    isValid(sudoku){
        return RowsValidator.checkRows(sudoku) && 
               ColumnsValidator.checkColumns(sudoku) && 
               SquaresValidator.checkSquares(sudoku);
  }
}

module.exports = Validator
