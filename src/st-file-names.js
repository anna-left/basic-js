import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let arr = [];
    for (let i = 0; i < names.length; i++) {
        const el = names[i];
        if (arr.indexOf(el) >= 0) {
            let newEl = el + '(1)';
            if (arr.indexOf(newEl) >= 0) {
                newEl = el + '(2)';
            }
            arr.push(newEl)

        } else { arr.push(el) }

    }
    return arr;
}

let a = renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']);
// ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']);
console.log(a);