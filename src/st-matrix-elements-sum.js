import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let arrInd = [];
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        const arr = matrix[i];
        for (let j = 0; j < arr.length; j++) {
            if (arrInd.indexOf(j) !== -1) {
                continue;
            } else if (arr[j] === 0) {
                arrInd.push(j);
            } else {
                sum += arr[j];
            }
            // const el = arr[j];
        }
    }
    return sum;
}

let a = getMatrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
]);
// 9);
console.log(a);