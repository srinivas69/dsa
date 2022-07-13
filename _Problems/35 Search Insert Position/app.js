//https://leetcode.com/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
    const numsLen = nums.length;

    console.log("numsLen: ",numsLen)
    if(numsLen < 1 || numsLen > 10000){
        return 0;
    }

    if(nums[0] > target) {
        return 0;
    }

    for(let i=0; i<numsLen; i++) {

        const num = nums[i];
        const prevNum = nums[i-1];

        console.log("num: ",num, " prevNum: ",prevNum);

        if(num == target) {

            return i;
        } else if(prevNum && (num > target && prevNum < target)) {

            return i;
        } 
    }

    if(nums[numsLen-1] < target) {
        return numsLen;
    }

    return -1
};

// solution2 using binary search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert2 = function(nums, target) {
    let start = 0, mid = 0, end = nums.length-1;
    

    while (start <= end){
        mid=Math.floor((start + end)/2);

        if (nums[mid] > target){
            end = mid - 1
        } else if (nums[mid] < target){
            start = mid + 1;
        }else return mid;
    }
    return (target < nums[mid]) ? mid:mid+1;

};

console.log(searchInsert2([1,3,5,6],4));