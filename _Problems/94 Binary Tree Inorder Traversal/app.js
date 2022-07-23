//https://leetcode.com/problems/binary-tree-inorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {

    const resultArr = [];
    (function inOrderTraversal(node){

        if(node !== null)
	    {
		    inOrderTraversal(node.left);
            resultArr.push(node.val);
		    console.log(node.val);
		    inOrderTraversal(node.right);
	    }
    })(root);
    
    return resultArr;
};

