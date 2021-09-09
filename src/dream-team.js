import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(matrix) {

    if (!Array.isArray(matrix)) {
        return false;
    }
    let res = "";
    for (let i = 0; i < matrix.length; i++) {
        const element = matrix[i];
        if (typeof(element) === 'string') {
            res = res + element.trim().slice(0, 1).toUpperCase();
        }

    }
    return res.split('').sort().join('');
}
// let a = (['Olivia', 1111, 'Lily', 'Oscar', true, null]);
// console.log(createDreamTeam(a));