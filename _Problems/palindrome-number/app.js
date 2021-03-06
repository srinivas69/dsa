//https://leetcode.com/problems/palindrome-number/
//Solution 1
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {

    /*let reverse = 0;

    reverse = palindrom(x, reverse);

    console.log("reverse: ",reverse)
    if(x === reverse) {

        console.log(`true`);
        return true;
    } else {

        return false
    }*/

    if(x < 0) {

        return false;
    }

    let value = (function palindrom( n, reverse, remainder){

        if(!reverse)
        reverse = 0;

        if(!n)
        n = x;

        console.log(`palindrom n: ${n} reverse: ${reverse} reminder: ${remainder}`);

        remainder = n % 10;
        reverse = reverse*10 + remainder;
        n /= 10;

        n = parseInt(n, 10)

        console.log(`palindrom n: ${n} reverse: ${reverse} reminder: ${remainder}`);

        //palindrom(n, reverse, remainder);

        if(n != 0){

            return palindrom.call(this, n, reverse, remainder);
        }

        if(x === reverse) {

            console.log(`true`);
            return true;
        } else {

            return false
        }

        //console.log(`palindrom n: ${n} reverse: ${reverse} reminder: ${remainder}`);
    })(x, 0);
    
    //console.log("value: ",value);

    return value;
};

function palindrom( n, reverse, remainder){

    if(!reverse)
    reverse = 0;

    if(!n)
    n = x;

    console.log(`palindrom n: ${n} reverse: ${reverse} reminder: ${remainder}`);

    remainder = n % 10;
    reverse = reverse*10 + remainder;
    n /= 10;

    n = parseInt(n, 10)

    console.log(`palindrom n: ${n} reverse: ${reverse} reminder: ${remainder}`);

    //palindrom(n, reverse, remainder);

    if(n != 0){

        return palindrom.call(this, n, reverse, remainder);
    } else {

        console.log(`reverse: ${reverse} `);

        return reverse;
    }

    /*if(x === reverse) {

        console.log(`true`);
        return true;
    } else {

        return false
    }*/

    //console.log(`palindrom n: ${n} reverse: ${reverse} reminder: ${remainder}`);
}

console.log(isPalindrome(242));


//https://www.code-recipe.com/post/palindrome-number
//Solution 2
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindromeSolution2 = function(x) {

    if (x < 0 || (x > 0 && x%10 == 0))
            return false;

    
    let reversedNum = 0
    while (x > reversedNum){
        reversedNum = reversedNum * 10 + x % 10
        x = parseInt((x / 10), 10);

        console.log(`reversedNum: ${reversedNum} x: ${x}`);
    }

    return (x == reversedNum || x == parseInt((reversedNum / 10), 10));

 }

 console.log(isPalindromeSolution2(242));
