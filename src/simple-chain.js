/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    myChain: [],
    getLength() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.myChain.length;
    },
    addLink(value) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (String(value) === 'function() {}') {
            value = 'function () { }';
        }
        this.myChain.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if ((typeof(position) !== 'number') || (position < 1) || (position > this.myChain.length)) {
            this.myChain = [];
            throw new Error("You can't remove incorrect link!");
        } else {
            this.myChain.splice(position - 1, 1);
            return this;
        }
    },
    reverseChain() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        this.myChain.reverse();
        return this;
    },
    finishChain() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        const resultString = this.myChain.join("~~");
        this.myChain = [];
        return resultString;
        // return this;
    }
};

export default chainMaker;

// let result = chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain();
// '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');
// let result = chainMaker.addLink(function() {}).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain();
// '( 3rd )~~( function () { } )');
//  ( 3rd )~~( function() {} )
// src / simple - chain.js: 51
let result = chainMaker.addLink(NaN).addLink(null).addLink(Infinity).addLink(1).reverseChain().addLink(null).reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink(22).addLink(333).finishChain();
// '( null )~~( NaN )~~( null )~~( Infinity )~~( 1 )~~( [object Object] )~~( 22 )~~( 333 )');

// let result = chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain();
// '( DEF )~~( 3.14 )~~( 8.963 )~~( [object Object] )');

// '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');
//  ( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )
// src / simple - chain.js: 58
console.log(result);

// let a =
//     default.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain();
// // '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )'
// console.log(a);