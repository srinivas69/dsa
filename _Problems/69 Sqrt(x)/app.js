//https://leetcode.com/problems/sqrtx/
/**
 * solution logic
 * Repeated Subtraction Method of Square Root
 * https://www.cuemath.com/algebra/squares-and-square-roots/
 */
/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    
    if(x<0 || x>(Math.pow(2,31)-1))
       return 0;
    
    let oddDigit = 1;
    let sqrtInt = 0;

    //console.log(`x ${x} sqrtInt ${sqrtInt} oddDigit ${oddDigit}`);
    
    while (x>0) {

        x = x - oddDigit;
        oddDigit += 2

        if(x >= 0) 
          sqrtInt++;

        //console.log(`x ${x} sqrtInt ${sqrtInt} oddDigit ${oddDigit}`);
    }

    return sqrtInt;
};

// solution 2
/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt2 = function(x) {

    let low = 1, high = x, ans = -1;
        if(x == 0)
            return 0;
        while(low <= high){
            let mid = parseInt((low + high) / 2,10);
            if(mid * mid == x)
                return mid;
            else if(mid * mid > x)
                high = mid - 1;
            else{
                low = mid + 1;
                ans = mid;   
            }
        }
        return ans;
 }


console.log(mySqrt2(25));