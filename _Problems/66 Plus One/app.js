//https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    
    const digitsLen = digits.length;
    if(digitsLen<1 || digitsLen>100) 
       return [];

    const grtThanTwoDgts = digits.filter(digit=>(digit.toString().length>1));

    if(grtThanTwoDgts.length > 0){
        return []
    }

    let digSingStr = digits.reduce((digitsStr, digit)=>digitsStr+digit.toString());

    let digsPlusOne = BigInt(digSingStr)+BigInt('1');

    console.log(`digSingStr ${digSingStr} digsPlusOne ${BigInt(digSingStr)+BigInt('1')}`);

    const resultDitis = []
    while(digsPlusOne>0) {

        const reminder = BigInt(digsPlusOne) % 10n
        digsPlusOne = digsPlusOne / 10n;
        resultDitis.push(reminder);
    }

    let start = 0;
    let end = resultDitis.length-1;
    const mid = parseInt((start+end)/2);

    for(start; start<=mid; start++){

        const temp = parseInt(resultDitis[start]);
        resultDitis[start] = parseInt(resultDitis[end-start]);
        resultDitis[end-start] = temp;
    }

    return resultDitis;
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// solution 2
 var plusOne2 = function(digits) {
    const lengthDigits = digits.length;
      let carryOver = 0;
      for(var indexI = lengthDigits - 1; indexI > -1; indexI--) {
         const val = digits[indexI];
         const addOne = val + 1;
         if(addOne <10)  { 
             digits[indexI] = addOne;
           carryOver = 0;
           break;
         }
         
         if (addOne === 10) {
           digits[indexI] = 0;
           carryOver = 1;
         }
      }
   
      if (carryOver === 1) digits.unshift(1);
      return digits;
   };

console.log(plusOne2([9,9]));