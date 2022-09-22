//https://leetcode.com/problems/balanced-binary-tree/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
 // Solution 1
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced1 = function(root) {
    
    let balanced = true;
    (function findDiff(node){
        
        if(!node) {
           return true
        }

    const heightL = findHeight(node.left);
    const heightR = findHeight(node.right);
    
    console.log("heightL: ",heightL," heightR: ",heightR);
    console.log("node.left: ",node.left," node.right: ",node.right);

    const diff = heightL - heightR;
    
    console.log("diff: ",diff);

    if(diff <= 1 && diff >= -1) {
        findDiff(node.left);
        findDiff(node.right);
    } else {

        console.log("balanced: ",false);
        balanced = false;
        //return false;
    }
    })(root)
    
    
    console.log("return balanced: ",balanced);
    return balanced;
};

function findHeight(node) {

    //console.log("node: ",node);
    if(!node){
        return 0;
    }
    let lh = findHeight(node.left);
    let rh = findHeight(node.right);
    
    //console.log(lh, rh);
    return 1+Math.max(lh,rh);

}

var ans = true;
// Solution 2
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
    heightOfTree(root);
    console.log("ans: ",ans)
    return ans;
 }

 function heightOfTree(currentnode){
    if(currentnode===null){
      return 0;
    }
    const lh = heightOfTree(currentnode.left);
    const rh = heightOfTree(currentnode.right);
    const a = Math.abs(lh-rh);
    if(a>1){
      ans = false;
    }
    const height =Math.max(lh,rh)+1;
    return height;
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

//console.log("P: ",p);

isBalanced(p);