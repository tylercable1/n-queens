/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

  */

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  var arrObj = board.attributes;
  var solution = [];
  for (var key in arrObj) {
    solution.push(arrObj[key]);
  }
  solution.splice(-1);
  for (var i = 0; i < n; i++) {
    solution[i][i] = 1;
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  
  var findSolutions = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    } 
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyRooksConflicts()) {
        findSolutions(row + 1);
      }
      board.togglePiece(row, col);
    }
  };
  findSolutions(0);
  
  console.log('Number of solutions for ' + n + ' rooks: ' + solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];
  var board = new Board({n: n});
  var findSolutions = function(row) {
    if (row === n) {
      solution = solution.concat(board.rows());
      return true;
    } 
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (col + 1 === n && board.hasAnyQueensConflicts()) {
        board.togglePiece(row, col);
        break;
      }
      if (!board.hasAnyQueensConflicts()) {
        if (findSolutions(row + 1)) {
          return true;
        }
      }
      if (n > 1) {
        board.togglePiece(row, col);      
      }
    }
  };
  
  if (n === 2 || n === 3) {
    return new Array(n);
  }
  findSolutions(0);
  
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  var findSolutions = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    } 
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (col + 1 === n && board.hasAnyQueensConflicts()) {
        board.togglePiece(row, col);
        break;
      }
      if (!board.hasAnyQueensConflicts()) {
        findSolutions(row + 1);
      }
      if (n > 1) {
        board.togglePiece(row, col);      
      }
    }
  };
  findSolutions(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
