//https://leetcode.com/problems/same-tree/

  //Definition for a binary tree node.
function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// Solution 1
 var isSameTree = function(p, q) {

    let isSameTreeVal = true;
    
    (function inOrderTraversal(nodeP,nodeQ){

        if(nodeP !== null || nodeQ !==null)
	    {
            inOrderTraversal(nodeP !== null ? nodeP.left : null, nodeQ !== null ? nodeQ.left : null);
            const nodePVal =  nodeP !== null ? nodeP.val : null;
            const nodeQVal = nodeQ !== null ? nodeQ.val : null;
		    console.log(`nodeP val: ${nodePVal} nodeQ val: ${nodeQVal}`);

            if(nodePVal != nodeQVal) {

                console.log("if(nodePVal != nodeQVal) {")
                isSameTreeVal = false;
                return;
            } else 
            inOrderTraversal(nodeP != null ? nodeP.right : null,nodeQ != null ? nodeQ.right : null);
	    } 
    })(p,q);

    return isSameTreeVal;
}


/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// Solution 2
var isSameTree = function(p, q) {

    if(p == null && q == null) {
        return true;
    } else {
        return p != null && q != null && p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}
// const p = {

//     val: 1,
//     left: {
//         val: 2,
//         left: null,
//         right: null
//     },
//     right: {
//         val: 3,
//         left: null,
//         right: null
//     }
// }

// const q = {

//     val: 1,
//     left: {
//         val: 2,
//         left: null,
//         right: null
//     },
//     right: {
//         val: 3,
//         left: null,
//         right: null
//     }
// }

const p = {

    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: null
}

const q = {

    val: 1,
    left: null,
    right: {
        val: 2,
        left: null,
        right: null
    }
}

console.log(isSameTree(p,q));