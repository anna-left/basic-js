import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let res = 0;
    let strN = String(n);
    for (let i = 0; i < strN.length; i++) {
        const curNumber = Number(strN.slice(0, i) + strN.slice(i + 1));
        res = Math.max(curNumber, res);

    }
    return res;
}