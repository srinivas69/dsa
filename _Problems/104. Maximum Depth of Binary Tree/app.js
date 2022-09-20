//https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
 * @return {number}
 */
 var maxDepth1 = function(root) {

    if(!root) {
        return 0;
    }
    
    if(root && !root.left && !root.right) {
        return 1;
    }

    let depth = 1;

    let currentLeft = root.left ? root.left : null;
    let currentRight = root.right ? root.right : null;

    const leftDepth = currentLeft != null ? findDepth1(currentLeft,depth) : 1;
    const rightDepth = currentRight != null ? findDepth1(currentRight,depth) : 1;

    console.log(`leftDepth ${leftDepth} rightDepth ${rightDepth}`);

    if(leftDepth > rightDepth)
       return leftDepth;
    else 
       return rightDepth;
};
// Solution 1
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {

    if(!root) {
        return 0;
    }
    
    if(root && !root.left && !root.right) {
        return 1;
    }

    let initDepth = 0;
    let maxDepth = 0;

    (
       function findDepth(node, depth) {

            //console.log(node, depth, maxDepth);
            if(node) {
                depth++;
                if(depth > maxDepth) {
                    maxDepth = depth;
                }
                findDepth(node.left,depth);
                findDepth(node.right,depth);
            }
        
            //return maxDepth;
         }
    )(root,initDepth);

    //console.log(maxDepth);

    return maxDepth;
 }

 function findDepth(node,depth,maxDepth) {

    console.log(node, depth, maxDepth);
    if(node) {
        depth++;
        if(depth > maxDepth) {
            maxDepth = depth;
        }
        findDepth(node.left, depth, maxDepth);
        findDepth(node.right, depth, maxDepth);
    }

    return maxDepth;
 }

 // Solution 2
 /**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    if(!root){
       return 0;
   }
   let lh = maxDepth(root.left);
   let rh = maxDepth(root.right);
   
   return 1+Math.max(lh,rh);
}

function findDepth1(node,depth) {

    let currentNode;
    depth++;
    if(node.left && node.right) {

        findDepth1(node.left,depth);
        findDepth1(node.right,depth);

    } else if(node.left) {

        currentNode = node.left;
        return findDepth1.call(this,currentNode,depth);
    } else if(node.right) {

        currentNode = node.right;
        return findDepth1.call(this,currentNode,depth);
    } else {
        return depth;
    }
}


// const root = {

//     val: 3,
//     left: {
//         val: 9,
//         left: null,
//         right: null
//     },
//     right: {
//         val: 20,
//         left: {
//             val: 15,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 7,
//             left: null,
//             right: null
//         }
//     }
// }

// const root = {

//     val: 1,
//     left: null,
//     right: {
//         val: 2,
//         left: null,
//         right: null
//     }
// }

//const root = null

//[3,4,5,-7,-6,null,null,-7,null,-5,null,null,null,-4]

const root = {

    val: 3,
    left: {
        val: 4,
        left: {
            val: -7,
            left: {
                val: -7,
                left: null,
                right: null
            },
            right: {
                val: -6,
                left: {
                    val: -5,
                    left: {
                        val: -4,
                        left: null,
                        right: null
                    },
                    right: null
                },
                right: null
            }
        },
        right: {
            val: -6,
            left: null,
            right: null
        }
    },
    right: {
        val: 5,
        left: null,
        right: null
    }
}

console.log(maxDepth(root))