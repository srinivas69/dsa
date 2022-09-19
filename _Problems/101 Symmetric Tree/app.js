//https://leetcode.com/problems/symmetric-tree/

 // Definition for a binary tree node.
function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}
 
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric1 = function(root) {
    
    if(!root)
       return true;

    if(!root.left || !root.right) {
        return false;
    }

    if(!root.left && !root.right)
       return true;

   if(root.left.val !== root.right.val) {
      return false;
   }

   //console.log("root.left ",root.left," root.right: ",root.right)
   const leftArr = inOrderTraversal(root.left,[]);
   const rightArr = inOrderTraversal(root.right,[]);

   console.log(leftArr, rightArr);

   if(leftArr.length != rightArr.length){
      return false;
   }

   let result = true;
   
   for(let i=leftArr.length-1; i>=0; i--){
      
      const leftTop = leftArr[i]
      const rightFront = rightArr[0];

      console.log("leftTop: ",leftTop," rightFront: ",rightFront);

      if(leftTop !== rightFront) {
         result = false;
         break;
      } else {

         leftArr.pop();
         rightArr.shift();
      }
   }

   console.log("result, ",result)

   return result;
    
};

/******************* Working Solutionˀ ****************/
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {

   if(!root)
       return true;
    
   return treeIsSame(root.left,root.right);
 }

 /**
 * @param {TreeNode} root
 * @param {TreeNode} root
 */
 function treeIsSame(left,right) {

  if(left === null || right === null) {
      return left === right;
  } else if(left.val != right.val) {
    return false;
  } else 
    return treeIsSame(left.left, right.right) && treeIsSame(left.right, right.left)
 }

function inOrderTraversal(node, elems) {

   if(node !== null)
	{
      //console.log(node)
     if(node.left!==null)
        inOrderTraversal(node.left,elems);
     const val = node.val;
     //console.log("node val: ",node.val);
     elems.push(val);
     if(node.right);
        inOrderTraversal(node.right,elems);
   }

   return elems;
   
}

// const p = new TreeNode(1);
// p.left = new TreeNode(2);
// p.right = new TreeNode(2);

// leftRoot = p.left;
// leftRoot.left = new TreeNode(3);
// leftRoot.right = new TreeNode(4);

// rightRoot = p.right;
// rightRoot.left = new TreeNode(4);
// rightRoot.right = new TreeNode(3);

//---------------------------------------

// const p = new TreeNode(1);
// p.left = new TreeNode(2);
// p.right = new TreeNode(2);

// leftRoot = p.left;
// leftRoot.left = new TreeNode(null);
// leftRoot.right = new TreeNode(3);

// rightRoot = p.right;
// rightRoot.left = new TreeNode(null);
// rightRoot.right = new TreeNode(3);

//---------------------------------------

const p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(2);

leftRoot = p.left;
leftRoot.left = new TreeNode(2);
leftRoot.right = new TreeNode(null);

rightRoot = p.right;
rightRoot.left = new TreeNode(2);

console.log("P: ",p);

isSymmetric(p);