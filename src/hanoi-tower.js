import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let obj = { turns: 0, seconds: 0 };
    obj.turns = Math.pow(2, disksNumber) - 1;
    obj.seconds = Math.floor(obj.turns * 3600 / turnsSpeed);
    return obj;
}

// assert.deepEqual(calculateHanoi(48, 4040), { turns: 281474976710655, seconds: 250819286177811 });

console.log(calculateHanoi(48, 4040));