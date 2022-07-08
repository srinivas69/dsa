//https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    
    if(!s)
      return "Not a valid Input";

    if(s.length > 15)
      return "Not a valid Input";

    let romanLettersMap = new Map();
    romanLettersMap.set("I",1);
    romanLettersMap.set("V",5);
    romanLettersMap.set("X",10);
    romanLettersMap.set("L",50);
    romanLettersMap.set("C",100);
    romanLettersMap.set("D",500);
    romanLettersMap.set("M",1000);

    let sLen = s.length;

    let numbericNum = 0;

    while(sLen--){
        const romanMatLett = romanLettersMap.get(s[sLen]);
        const romanMatLettPrev = romanLettersMap.get(s[sLen+1]);

        if(!romanMatLett) {
            return "Not a roman integer";
        }

        if(romanMatLettPrev && (romanMatLett<romanMatLettPrev)) {

            numbericNum -= romanMatLett;
        } else {

            numbericNum += romanMatLett;
        }


    }

    return numbericNum;
};

console.log(romanToInt("MIV"));