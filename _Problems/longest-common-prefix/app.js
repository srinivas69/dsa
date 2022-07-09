//https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    
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

console.log(longestCommonPrefix(["dog","racecar","car"]));