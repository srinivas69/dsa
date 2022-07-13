/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {

    const haystackLen = haystack.length;
    const needleLen = needle.length;
    if(needleLen <= 0 || haystackLen <= 0) {

        return 0;
    }

    for(let i=0; i<haystackLen; i++) {

        const hayStackNeedleSubstr = haystack.substring(i,needleLen+i);

        console.log(hayStackNeedleSubstr);

        if(hayStackNeedleSubstr === needle) {

            return i;
        }
    }

    return -1;
    
};

console.log(strStr("hello", "ll"));