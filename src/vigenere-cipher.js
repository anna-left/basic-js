import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

export default class VigenereCipheringMachine {
    constructor(direct) {
        this.direct = direct;
    }
    genSqViz() {
        let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        let squareVig = [];
        for (let i = 0; i < alph.length; i++) {
            squareVig[i] = alph.slice(i).concat(alph.slice(0, i));
        }
        return squareVig;
    }
    defineKey(key, lengthText) {
        key = key.toUpperCase();
        let a = -1;
        let newKey = '';
        while (newKey.length < lengthText) {
            a++;
            for (let j = 0; j < key.length; j++) {
                newKey = newKey + key[j];

                if (newKey.length >= lengthText) {
                    break;
                }
            }
        }
        return newKey;
    }
    encrypt(text, key) {

        if (!text || !key) {
            throw new Error('Incorrect arguments!');
        }

        let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        let newText = '';
        let objSymb = {};
        text = text.toUpperCase();

        for (let i = 0; i < text.length; i++) {
            if (alph.indexOf(text[i]) === -1) {
                objSymb[i] = text[i];
            } else { newText = newText + text[i] }
        }
        let newKey = this.defineKey(key, newText.length);

        let squareVig = this.genSqViz();
        let result = "";
        for (let i = 0; i < newText.length; i++) {
            let n = alph.indexOf(newText[i]);
            let m = alph.indexOf(newKey[i]);
            result += squareVig[n][m];
        }
        for (let prop in objSymb) {
            let strA = result.slice(0, prop);
            let strB = result.slice(prop, result.length);
            result = strA + objSymb[prop] + strB;
        }
        if (this.direct === false) {
            result = result.split("").reverse().join("");
        }
        return result;
    }
    decrypt(text, key) {
        if (!text || !key) {
            throw new Error('Incorrect arguments!');
        }
        let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        let newText = '';
        let objSymb = {};
        text = text.toUpperCase();

        for (let i = 0; i < text.length; i++) {
            if (alph.indexOf(text[i]) === -1) {
                objSymb[i] = text[i];
            } else { newText = newText + text[i] }
        }
        let newKey = this.defineKey(key, newText.length);
        let squareVig = this.genSqViz();

        var result = "";
        for (let i = 0; i < newText.length; i++) {
            let n = alph.indexOf(newKey[i]);
            let m = squareVig[n].indexOf(newText[i]);
            result += alph[m];
        }
        for (let prop in objSymb) {
            let strA = result.slice(0, prop);
            let strB = result.slice(prop, result.length);
            result = strA + objSymb[prop] + strB;
        }
        if (this.direct === false) {
            result = result.split("").reverse().join("");
        }
        return result;
    }
}
const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);


let a = directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js');
// 'LEARN FRONTEND DEVELOPMENT :)');
console.log(a);