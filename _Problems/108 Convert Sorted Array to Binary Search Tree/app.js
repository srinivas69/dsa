//https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {

    const middleIndex = Math.trunc(nums.length / 2);

    //console.log(Math.trunc(middleIndex));

    //const leftSlic = nums.slice(0,middleIndex);
    //const rightSlic = nums.slice(middleIndex+1);

    //console.log(leftSlic,rightSlic);

    const root = new TreeNode(nums[middleIndex]);
    let node = root;

    (
        function constructTree(numsSlice,indic) {

            if(numsSlice.length > 0) {

                const middleIndexSlic = Math.trunc(numsSlice.length / 2);

                const leftSlic = numsSlice.slice(0,middleIndexSlic);
                const rightSlic = numsSlice.slice(middleIndexSlic+1);

                console.log(leftSlic, rightSlic);

                if(indic === "l") {
                    
                    node.left = new TreeNode(numsSlice[middleIndexSlic]);
                    node = node.left;
                }

                if(indic === "r") {
                    
                    node.right = new TreeNode(numsSlice[middleIndexSlic]);
                    node = node.right;
                }
                constructTree(leftSlic, "l");
                constructTree(rightSlic, "r");
            }

        }
    )(nums);

    console.log(JSON.stringify(root))
    return root;
};

console.log(sortedArrayToBST([-10,-3,0,5,9,10]));