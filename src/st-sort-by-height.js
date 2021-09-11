import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let arrInd = [];
    let arrH = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === -1) {
            arrInd.push(i);

        } else {
            arrH.push(arr[i]);
        }
    }
    // var numbers = [4, 2, 5, 1, 3];
    arrH.sort(function(a, b) {
        return a - b;
    });
    for (let i = 0; i < arrInd.length; i++) {
        const pos = arrInd[i];
        arrH.splice(pos, 0, -1);
    }
    return arrH;
}
let a = sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
// [-1, 150, 160, 170, -1, -1, 180, 190],cl

console.log();