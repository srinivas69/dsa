// solution 1: Brute Force Method
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {

    if(!Array.isArray(nums)){

        console.log("Please pass valid array as 'nums' parameter");
        return [];
    } 

    if(isNaN(target)) {

        console.log("Please pass valid number as 'target' parameter");
        return [];
    }

    for(let i = 0; i<nums.length; i++) {

        let parentNum = nums[i];

        for(let j = i+1; j<nums.length; j++) {

            let childNum = nums[j];

            const sum = parentNum + childNum;

            console.log("parentNum: ",parentNum," childNum: ",childNum," sum: ",sum);

            if(sum == target) {
                return [i,j];
            }
        }
    }

    return [];
};

//console.log(twoSum([2,7,11,15],9));


//Solution 2: Using Hashmap
//https://www.code-recipe.com/post/two-sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSumHashMap = function(nums, target) {

    const visitedHashMap = new Map();

    for(let i = 0; i<nums.length; i++) {

        let num = nums[i];

        let checkNum = target - num;

        
        const visitedNum = visitedHashMap.get(checkNum);

        console.log("checkNum: ",checkNum," target: ",target," num: ",num," visitedNum: ",visitedNum);

        if(typeof visitedNum == 'undefined') {

            visitedHashMap.set(num,i);
        } else {

            return [i,visitedNum];
        }
    }

    return [];
 }

 console.log(twoSumHashMap([2,7,11,15],9));