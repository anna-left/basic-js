import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!str) {
        return '';
    }
    let arr = str.split('');
    let result = '';
    let curSymb = '';
    let curSum = 0;
    let el = '';
    for (let i = 0; i <= arr.length; i++) {
        if (i < arr.length) {
            el = arr[i];

        } else { el = '' }


        if (curSymb === '') {
            // curSymb = el;
            // continue;
        } else if (curSymb !== el) {
            // curSum = +1;
            if (curSum > 1) {
                result = result + String(curSum);
            }
            result = result + curSymb;
            curSum = 0;
            // } else {

        }
        curSymb = el;
        curSum += 1;
    }

    // let obj = arr.reduce(function(acc, el) {
    //     acc[el] = (acc[el] || 0) + 1;
    //     return acc;
    // }, {});


    // for (let key in obj) {
    //     let n = (obj[key] === 1) ? '' : String(obj[key]);
    //     result = result + key + n;
    // }
    return result;

}
let a = encodeLine('abbcca');
// 'a2b2ca');
// '4a4t'
console.log(a);