//https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
// Solution 1
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST1 = function(nums) {

    const middleIndex = Math.trunc(nums.length / 2);

    const root = new TreeNode(nums[middleIndex]);

    (
        function constructTree(node,numsSlice,indic) {

            if(numsSlice.length > 0) {

                const middleIndexSlic = Math.trunc(numsSlice.length / 2);

                const leftSlic = numsSlice.slice(0,middleIndexSlic);
                const rightSlic = numsSlice.slice(middleIndexSlic+1);

                //console.log(leftSlic, rightSlic);

                if(indic === "l") {
                    
                    node.left = new TreeNode(numsSlice[middleIndexSlic]);
                    node = node.left;
                }

                if(indic === "r") {
                    
                    node.right = new TreeNode(numsSlice[middleIndexSlic]);
                    node = node.right;
                }
                constructTree(node,leftSlic, "l");
                constructTree(node,rightSlic, "r");
            }

        }
    )(root,nums);

    //console.log(JSON.stringify(root))
    return root;
};

// Solution 2
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST2 = function(nums) {

    return makeTree(nums, 0, nums.length - 1);
 }

 function makeTree(nums, left, right){
    if(left > right)return null;
    let mid = Math.floor((left+right)/2);
    let root = new TreeNode(nums[mid]);
    root.left = makeTree(nums,left,mid-1);
    root.right = makeTree(nums,mid+1,right);

    return root;
}

// Solution 3
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums,left=0,right=nums.length-1) {

    if(left > right)return null;
    let mid = Math.floor((left+right)/2);
    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums,left,mid-1);
    root.right = sortedArrayToBST(nums,mid+1,right);

    return root;
 }

console.log(sortedArrayToBST([-10,-3,0,5,9,10]));