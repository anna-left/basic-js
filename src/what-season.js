import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(curDate) {
    if (curDate === undefined) {
        return 'Unable to determine the time of year!';
    }

    try {
        curDate.toTimeString();
    } catch (e) {
        throw new Error('Invalid date!');
    }

    const curMonth = curDate.getMonth() + 1;
    switch (curMonth) {
        case 3:
        case 4:
        case 5:
            return "spring";
        case 6:
        case 7:
        case 8:
            return "summer";
        case 9:
        case 10:
        case 11:
            return "autumn";
        case 12:
        case 1:
        case 2:
            return "winter";
    }

}




// let a = new Date(1908, 2, 30, 14, 23, 26, 831);
// let a = new Date(2150, 7, 21, 18, 36, 41, 841);
// let a = new Date(1072, 8, 29, 18, 59, 55, 281);
// let a = { John: 'Smith' };
// console.log(getSeason(a));