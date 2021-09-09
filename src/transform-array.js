import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here


    // --discard - next исключает следующий элемент массива из преобразованного массива.
    //     --discard - prev исключает предыдущий элемент массива из преобразованного массива.
    //     --double - next удваивает следующий элемент массива в преобразованном массиве.
    //     --double - prev удваивает предыдущий элемент массива в преобразованном массиве.
    if (!Array.isArray(arr)) {
        throw new Error("\'arr\' parameter must be an instance of the Array!");
    }
    let newArr = [];
    // let discard_next
    let discard_next = 0;
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (discard_next === 1) {
            discard_next = 2;
            continue;
        }
        switch (arr[i]) {
            case '--discard-next':
                discard_next = 1;
                break;
            case '--discard-prev':
                if (discard_next !== 2 && i !== 0) {
                    newArr.splice(newArr.length - 1);
                }
                break;
            case '--double-next':
                if (i + 1 < arr.length) {
                    newArr.push(arr[i + 1]);
                }

                break;
            case '--double-prev':
                if (discard_next !== 2 && i !== 0) {
                    newArr.push(newArr[newArr.length - 1]);
                }
                break;
            default:
                newArr.push(arr[i]);
        }
        discard_next = (discard_next === 1) ? 1 : 0;
    }
    return newArr;
}

let input = [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5];
// output: [1, 2, 3, 4, 5]
console.log((transform(input)));