//https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
// Worng solution
 var longestCommonPrefix2 = function(strs) {
    
    if(strs.length < 1 || strs.length > 200) {

        return "";
    }

    const prefixes = new Map();
    const longestCommonPrefixObj= {};

    /*for(let i=1; i<=200; i++){

        for(str of strs){

            //console.log(`str: ${str}`);
            const strLen = str.length;
            if(strLen < i) {

                continue;
            }

            for(let j=0; j<strLen; j++) {

                
                const prefixOfStr = str.substring(j,i+j);

                console.log(`j: ${j} j+i: ${i+j} prefixOfStr: ${prefixOfStr}`);
                //console.log(`prefixOfStr ${prefixOfStr}`);

                //if(prefixOfStr.length == i+1) {
                if(prefixOfStr.length > 1) {

                    const prefixStrCount = prefixes.get(prefixOfStr);

                    if(prefixStrCount) {

                        prefixes.set(prefixOfStr,prefixStrCount+1);
                    } else {

                        prefixes.set(prefixOfStr,1);
                    }
                }
            }
        }
    }*/

    for(str of strs){

        const strLen = str.length;
        for(let i=2; i<=strLen; i++){

            for(let j=0; j<strLen-i; j++) {

                const prefixOfStr = str.substring(j,i+j);

                console.log(`j: ${j} j+i: ${i+j} prefixOfStr: ${prefixOfStr}`);
                //console.log(`prefixOfStr ${prefixOfStr}`);

                //if(prefixOfStr.length == i+1) {
                //if(prefixOfStr.length > 1) {

                    const prefixStrCount = prefixes.get(prefixOfStr);
                    let prefixStrCountNew = 1;
                    if(prefixStrCount) {

                        prefixStrCountNew = prefixStrCount+1;
                        prefixes.set(prefixOfStr,prefixStrCountNew);
                    } else {

                        prefixes.set(prefixOfStr,prefixStrCountNew);
                    }
                //}

                const lastLongestPrefixWord = longestCommonPrefixObj.word;
                const lastLongestPrefixWordCount = longestCommonPrefixObj.count;

                if(lastLongestPrefixWord) {

                    if(prefixStrCountNew > lastLongestPrefixWordCount){

                        longestCommonPrefixObj.word = prefixOfStr;
                        longestCommonPrefixObj.count = prefixStrCountNew;
                    }
                    
                } else {

                    longestCommonPrefixObj.word = prefixOfStr;
                    longestCommonPrefixObj.count = prefixes.get(prefixOfStr);
                }
            }
        }

    }

    console.log("prefixes: ",prefixes);
    console.log("longestCommonPrefixObj: ",longestCommonPrefixObj);

};


/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix2 = function(strs) {

    if(strs.length < 1 || strs.length > 200) {

        return "";
    }

    const prefixes = new Map();
    const longestCommonPrefixObj= {};

    for(str of strs){

        const strLen = str.length;
        console.log(`str: ${str} strLen ${strLen}`);

        if(strLen == 0)
          continue;
        for(let i=strLen; i>0; i--){

            //console.log(`i ${i} `);
            const prefixOfStr = str.substring(0,i);

            console.log(`prefixOfStr ${prefixOfStr}`);

            const prefixStrCount = prefixes.get(prefixOfStr);
            let prefixStrCountNew = 1;
            if(prefixStrCount) {

                prefixStrCountNew = prefixStrCount+1;
                prefixes.set(prefixOfStr,prefixStrCountNew);
            } else {

                prefixes.set(prefixOfStr,prefixStrCountNew);
            }

            const lastLongestPrefixWord = longestCommonPrefixObj.word;
                const lastLongestPrefixWordCount = longestCommonPrefixObj.count;

                if(lastLongestPrefixWord) {

                    if(prefixStrCountNew > lastLongestPrefixWordCount){

                        longestCommonPrefixObj.word = prefixOfStr;
                        longestCommonPrefixObj.count = prefixStrCountNew;
                    }
                    
                } else {

                    longestCommonPrefixObj.word = prefixOfStr;
                    longestCommonPrefixObj.count = prefixes.get(prefixOfStr);
                }
        }
    }

    console.log("prefixes: ",prefixes);
    console.log("longestCommonPrefixObj: ",longestCommonPrefixObj);

    if(!longestCommonPrefixObj.count || (strs.length>1 && longestCommonPrefixObj.count == 1)){
        return "";
    } else
        return longestCommonPrefixObj.word;
 }

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let maxLength = -Infinity;
    let str = '';
    for(let i = 0; i < strs[0].length; i++) {
        let end = i;
        let compare = strs[0].split('').splice(0, (end + 1)).join('');
        console.log("compare, ",compare)
        let isInclude = true;
        strs.forEach(el => {
            if(el.indexOf(compare) !== 0){
                isInclude = false;
            }
        });
        if(isInclude && compare.length > maxLength){
            maxLength = compare.length;
            str = compare;
        }
        
    }
    return str;
};

console.log(longestCommonPrefix(["reflower","flow","flight"]));