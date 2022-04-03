# Sudoku validator

To run program and tests, clone repostory. After it's done run command:
```sh
  npm install
``` 
- The program can be run via `bin/validate`:

```sh
  node bin/validate <full path to the sudoku file to validate>
```
- The tests can be run via :

```sh
  npm run test
```
The program return a different result for 3 cases:
* If the sudoku puzzle is valid and completed, programm returns `Sudoku is valid.`
* If the sudoku puzzle is valid but not fully completed, programm returns `Sudoku is valid but incomplete.`
* If the sudoku puzzle is not valid, programm returns `Sudoku is invalid.`

To make a Sudoku puzzle valid:
- it's rows must not contain the same numbers;
- it's columns must not contain the same numbers;
- it's 9x9 square must not contain the same numbers;

4 classes have been added to reduce code duplication and logic has been derived to make the program work successfully.

Here are the test results:  
![alt text](https://github.com/MDirvens/DataFiles/blob/main/Pictures/sudokuValidatorTest.png)
