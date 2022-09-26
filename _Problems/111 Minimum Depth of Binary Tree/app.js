//https://leetcode.com/problems/minimum-depth-of-binary-tree/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function(root) {

    if(!root){
        return 0;
    }

    if(!root.left) {
        return findMinDepth(root.right) 
    }

    if(!root.right) {
        return findMinDepth(root.left) 
    }

    return findMinDepth(root)
};

function findMinDepth(node){

    if(!node){
        return 0;
    }

    const lh = findMinDepth(node.left);
    const rh = findMinDepth(node.right);

    return 1+Math.min(lh,rh);
}

const p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);

leftRoot = p.left;
leftRoot.left = new TreeNode(4);
leftRoot.right = new TreeNode(null);

rightRoot = p.right;
rightRoot.left = new TreeNode(5);

rightRoot1 = rightRoot.left;
rightRoot1.right = new TreeNode(6);

minDepth(p);