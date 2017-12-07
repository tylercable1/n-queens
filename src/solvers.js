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

  //use this
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

window.findSolutions = function(n, board, results) {
  if (board === undefined) {
    board = new Board({'n': n});
  }
  var rows = board.rows();
  var validSpaces = [];
  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows.length; j++) {
      if (rows[i][j] === 0) {
        board.togglePiece(i, j);
        if (!board.hasAnyRooksConflicts()) {
          validSpaces.push([i, j]);
        }
        board.togglePiece(i, j);
      }
    }
  }
  console.log(validSpaces)
  console.log(board.rows()[0])
//HERE?
  for (var i = 0; i < validSpaces.length; i++) {
    // board.togglePiece([i], validSpaces[i])
    //     board[i][validSpaces[i]] = 1;
    // console.log(board)
    board.rows()[validSpaces[i][0]] = 1
}



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = findSolutions(n).length;
  console.log('Number of solutions for ' + n + ' rooks: ' + solutionCount);
  return solutionCount;

  // var solutionCount = 0;
  // var board = new Board({n: n});
  // //use board.get
  // var arrObj = board.get(0);
  // var validPointsArray = [];
  // var solution = [];
  // for (var key in arrObj) {
  //   solution.push(arrObj[key]);
  // }
  // solution.splice(-1);

  // //Call recursive fn to find solutions and solutionCount++
  // var recursion = function(col) {
  //   var column = col || 0;
  //   for (var i = 0; i < n; i++) {
  //     solution[i][column] = 1;
  //     debugger;
  //     if (board.hasAnyRooksConflicts()) {
  //       solution[i][column] = 0;
  //       solution[i][column + 1] = 1;
  //       console.log(solution);
  //       if (column + 1 === n) {
  //         column++;
  //         solutionCount++;
  //         recursion(column);       
  //       }
  //     }
  //   }
  //   return solution;
  // };

  // console.log(recursion());
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
