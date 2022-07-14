//https://leetcode.com/problems/length-of-last-word 
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    
    const sLen = s.length;
    console.log(sLen);
    if(sLen<1 || sLen>10*10*10*10) 
       return 0;

    let rightPointer = sLen;
    let lastWord = "";
    //console.log("s: ",s," sLen: ",sLen);
    for(let i=sLen-1; i>=0; i--) {

        //console.log("for s[i]: ",s[i]);
        if(!lastWord && (/\s/).test(s[i])) {

            rightPointer--;
            continue;
        }

        if((/\s/).test(s[i])) {

            return lastWord.length;
        } else {
            lastWord = lastWord+s[i];
        }
    }

    return lastWord.length;
};

console.log(lengthOfLastWord("a"));