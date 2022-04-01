class Methods {
    constructor() {
        this.newSudokuNumbers=[];
    }

    checkRows(sudokuNumbers) {
        var valid = !sudokuNumbers.some(this.checkrow);
        
        return valid;
    }

    checkrow(row) {
        var chars = row.split('');
        var sortedChars = chars.sort();
                        
        for (let i=0; i < sortedChars.length; i++) 
        {
            if (sortedChars[i] === sortedChars[i+1] && sortedChars[i] !== '0') 
            {
                return true;
            }
        }   
    }

    columnToRow(sudokuNumbers) {
        for(let i=0;i<sudokuNumbers.length;i++){
            this.newSudokuNumbers.push('');
            for(let j=0;j<sudokuNumbers.length;j++){
                
                this.newSudokuNumbers[i] += sudokuNumbers[j][i];
            }
        }

        return this.newSudokuNumbers;
    }

    squareToRow(sudokuNumbers) {
        this.newSudokuNumbers = Array(9).fill('');

        for(let i=0;i<sudokuNumbers.length;i++){
            for(let j=0;j<sudokuNumbers[i].length;j++){

            let newIndex = 3*Math.floor(i/3) + Math.floor(j/3);
            this.newSudokuNumbers[newIndex] += sudokuNumbers[i][j];
            }
        }

        return this.newSudokuNumbers;
    }

    sudokuNumbers(sudoku){
        return sudoku.split('\n').map(row => row.replaceAll(/[ |+-]/g,'') ).filter(item => item);
    }
}
  
module.exports = Methods
