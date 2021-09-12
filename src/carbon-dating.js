import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (typeof(sampleActivity) !== "string") {
        return false;
    }
    let sampleActivityNumber = parseFloat(sampleActivity);
    if (sampleActivityNumber !== sampleActivityNumber) {
        return false;
    }
    if (sampleActivityNumber <= 0 || sampleActivityNumber >= MODERN_ACTIVITY) {
        return false;
    }
    let res = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) * HALF_LIFE_PERIOD / Math.LN2);
    return res;
}

let a = dateSample('one');
console.log(a);