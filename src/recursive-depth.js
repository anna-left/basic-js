import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {

    calculateDepth(arr) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let arrayDepth = 1;
        for (let i = 0; i < arr.length; i++) {

            if (Array.isArray(arr[i])) {
                let newArr = arr.flat();
                arrayDepth = arrayDepth + this.calculateDepth(newArr);
                break;

                // arrayDepth += 1;
                // } else { arrayDepth = arrayDepth + 1 }
            }

        }
        return arrayDepth;
    }
}
// const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth([1, [8, [
//     []
// ]], 2, 3, [8, []], 4, 5, []]));