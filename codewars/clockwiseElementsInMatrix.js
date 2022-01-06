function solution(matrix) {
  const result = [];
  let rowInx = 0;
  let rowsCount = matrix.length;
  let colInx = 0;
  let colsCount = matrix.length;

  if (matrix[0].length === 0) return [];
  if (matrix[0].length === 1) return [matrix[0][0]];

  while (rowInx < rowsCount && colInx < colsCount) {
    //push the first row
    for (let i = colInx; i < colsCount; i++) {
      result.push(matrix[rowInx][i]);
    }
    rowInx += 1;

    //pusn the last column
    for (let i = rowInx; i < rowsCount; i++) {
      result.push(matrix[i][colsCount - 1]);
    }
    colsCount -= 1;

    //push the last row from the remaing rows
    if (rowInx < rowsCount) {
      for (let i = colsCount - 1; i > colInx - 1; i--) {
        result.push(matrix[rowsCount - 1][i]);
      }
      rowsCount -= 1;
    }
    if (colInx < colsCount) {
      for (let i = rowsCount - 1; i > rowInx - 1; i--) {
        result.push(matrix[i][colInx]);
      }
      colInx += 1;
    }
  }

  return result;
}

function solution1(matrix) {
    let result;

    while(matrix.length){
        //remove first row
        result = result ? result.concat(matrix.shift()) : matrix.shift();

        //remove last column
        for (let i = 0; i < matrix.length; i++) {
            result.push(matrix[i].pop())
        }

        //remove last row
        result = result.concat((matrix.pop() || []).reverse())

        //remove first column
        for (let i = matrix.length - 1; i >= 0 ; i--) {
            result.push(matrix[i].shift())
        }
    }

    return result
}

let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(solution1(array)); // [1,2,3,6,9,8,7,4,5]
array = [
  [1, 2, 3, 4],
  [4, 5, 6, 7],
  [7, 8, 9, 1],
  [2, 3, 6, 4],
];
console.log(solution1(array)); // [1, 2, 3, 4, 7, 1, 4, 6, 3, 2, 7, 4, 5, 6, 9, 8]
