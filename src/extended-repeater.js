import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    str = String(str);
    let separator = (options.separator === undefined) ? '+' : String(options.separator);
    let additionSeparator = (options.additionSeparator === undefined) ? '|' : String(options.additionSeparator);
    let addition = (options.addition === undefined) ? '' : String(options.addition);

    let resStr = '';
    let addStr = '';
    for (let j = 1; j <= options.additionRepeatTimes; j++) {
        if (addition) {
            addStr = addStr + addition;
            addStr = addStr + ((j === options.additionRepeatTimes) ? '' : additionSeparator);
        }
    }
    if (!options.additionRepeatTimes) {
        addStr = addStr + addition;
    }

    for (let i = 1; i <= options.repeatTimes; i++) {
        resStr = resStr + str + addStr;
        resStr = resStr + ((i === options.repeatTimes) ? '' : separator);
    }
    if (!options.repeatTimes) {
        resStr = resStr + str + addStr;
    }
    return resStr;
}


// let a = repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 });
// 'REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION');
// let a = repeater('9UXKEEt8Aq', { repeatTimes: 4, separator: '1L467Kdqx2', addition: 'IMqCarClDg', additionRepeatTimes: 8, additionSeparator: 'U7L9D0f8pb' });
// '9UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg1L467Kdqx29UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg1L467Kdqx29UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg1L467Kdqx29UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg');
// let a = repeater('la', { repeatTimes: 3 });
//'la+la+la');
let a = repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' });
// 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false');
console.log(a);

// 'REPEATABLE_STRINGADDITION|ADDITION|ADDITION222REPEATABLE_STRINGADDITION|ADDITION|ADDITION');

// str - строка, которую нужно повторить;
// options - это объект параметров, который содержит свойства:
// repeatTimes устанавливает количество повторений строки;
// separator - строка, разделяющая повторы str;
// add - это дополнительная строка, которая будет добавляться к каждому повторению строки str;
// addRepeatTimes устанавливает количество повторов сложения;
// addSeparator - это строка, разделяющая повторы добавления.