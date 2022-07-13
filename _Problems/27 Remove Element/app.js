//https://leetcode.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    
    console.log(nums.length);

    if(nums.length<=0 || nums.length>=100) {
        return 0;
    }

    let k = 0;
    let lastPointer = nums.length-1;

    for(let r=nums.length-1; r>=0; r--) {


            if(nums[r] == val) {

                //console.log("if(nums[r] == val) {");
                nums[r] = nums[lastPointer];
                nums[lastPointer] = "_";
                lastPointer--;
                k++;
            }
    }

    console.log(nums, k);

    const result = nums.length - k;

    console.log(result);
    return k;
};

console.log(removeElement([21,1,21,17,2,10,11,10,20,19,3,16,3,29,23,6,12,2,15,0,19,24,27,7,20,6,21,18,29,0,15,20,2,6,7,26,8,10,28,20,29,1,7,24,0,0,22,4,24,8,26,5,2,15,12,14,21,25,2,20,26,9,2,20,7,1,8,15,3,7,5,24,0,4,18,1,26,3,27,20,11,16,17,5,1,0,11,15,17,13,27,5,22,22,25,29,15,4,6,19],
    15));