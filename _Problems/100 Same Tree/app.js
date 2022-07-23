//https://leetcode.com/problems/same-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    
    const resultArrP = [];
    const resultArrQ = [];

    (function inOrderTraversalP(node){

        if(node !== null)
	    {
		    inOrderTraversalP(node.left);
            resultArrP.push(node.val);
		    console.log(node.val);
		    inOrderTraversalP(node.right);
	    } else {
           resultArrP.push(node.val);
        }
    })(p);

    (function inOrderTraversalQ(node){

        if(node !== null)
	    {
		    inOrderTraversalQ(node.left);
            resultArrQ.push(node.val);
		    console.log(node.val);
		    inOrderTraversalQ(node.right);
	    } else {
            resultArrQ.push(node.val);
         }
    })(q);

    let result = true;

    if(resultArrP.length != resultArrQ.length)
        result = false;

    for(let i=0; i<resultArrP.length; i++){

        if(resultArrP[i]!=resultArrQ[i])
            return false;
    }

    console.log(`p: ${p} q: ${q}`)

    return result;
    
};