/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    
    const aLen = a.length;
    const bLen = b.length;

    if(aLen < 1) {
        a = 0;
    }

    if(bLen < 1) {
        b = 0;
    }

    // const regExpBina = new RegExp('^[0-1]{1,}$','g');
    // if(!regExpBina.test(a)){
    //     a=0;
    // }

    // if(!regExpBina.test(b)){
    //     b=0;
    // }

    const aDecNum = findNumber(a);
    const bDecNum = findNumber(b);


    console.log(`aDecNum: ${aDecNum} bDecNum: ${bDecNum}`);

    const sum = aDecNum + bDecNum;

    console.log(`aDecNum: ${aDecNum} bDecNum: ${bDecNum} sum: ${sum}`);

    let sumBinNum = '';
    (function binaryNum(num){

        if(num>1) {

            binaryNum.call(this,BigInt(num)/2n);
        }
    
        sumBinNum+=BigInt(num)%2n;
    }(sum));

    console.log(`sumBinNum: ${sumBinNum} `);

    return sumBinNum;
};

function findNumber(num) {

    let pwrI = 0;
    let numLen = num.length - 1;
    let numDec = 0n;

    while (numLen>=0){

        const binDigit = num[numLen];

        if(binDigit == 1) {

            numDec = BigInt(numDec) + BigInt(Math.pow(2, pwrI));
        } 
        numLen--;
        pwrI++;
    }

    return numDec;
}

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// solution2
 var addBinary2 = function(a, b) {
    let maxLength = Math.max(a.length, b.length);
    // Pad the shorter string so both lengths are the same
    a = a.padStart(maxLength, '0');
    b = b.padStart(maxLength, '0');

    console.log(`a ${a} b ${b}`)
    let result = '';
    let carry = 0;
    for (let i = maxLength - 1; i >= 0; i--) {
        let sum = parseInt(a.charAt(i)) + parseInt(b.charAt(i)) + carry;
        result = (sum >= 2 ? (sum - 2).toString() : sum) + result;
        carry = sum >= 2 ? 1 : 0;
    }
    if (carry > 0) result = '1' + result;
    return result;
};

// console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
// "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"));

console.log(addBinary2("1010","1000"));