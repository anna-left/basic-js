import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let obj = {};
    for (let i = 0; i < domains.length; i++) {
        const el = domains[i];


        let pos1 = el.lastIndexOf('.');
        let str1 = el.slice(pos1, el.length);
        if (obj[str1] === undefined) {
            obj[str1] = 1;
        } else { obj[str1] += 1 }
        let pos2 = el.lastIndexOf('.', pos1 - 1);
        if (pos2 < 0) {
            let str2 = str1 + '.' + el.slice(0, pos1);
            if (obj[str2] === undefined) {
                obj[str2] = 1;
            } else { obj[str2] += 1 }
        } else {

            let str2 = str1 + el.slice(pos2, pos1);
            if (obj[str2] === undefined) {
                obj[str2] = 1;
            } else { obj[str2] += 1 }

            let str3 = str2 + '.' + el.slice(0, pos2);
            // if (obj[str3] === undefined) {
            obj[str3] = 1;
            // } else { obj[str2] += 1 }
        }

        // let pos3 = el.lastIndexOf('.', pos2 - 1);
    }
    return obj;
}


let a = '';
// a = getDNSStats(['epam.com']);
// , { '.com': 1, '.com.epam': 1 });
// console.log(a);
a = getDNSStats(['epam.com', 'info.epam.com']);
//  { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 });
console.log(a);
// a = getDNSStats([]);
//  {});
// console.log(a);