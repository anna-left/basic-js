import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 
 */
export default function countCats(matrix) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!matrix) {
        return 0;
    }
    let res = 0;
    for (let i = 0; i < matrix.length; i++) {
        const element = matrix[i];
        res = res + element.reduce((sum, x) => (x === '^^' ? sum + 1 : sum), 0);

    };
    return res;
}

// let a = countCats([
//     [0, 1, '^^'],
//     [0, '^^', 2],
//     ['^^', 1, 2]
// ]);