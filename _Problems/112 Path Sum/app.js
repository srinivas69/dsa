//https://leetcode.com/problems/path-sum/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
 // solution 1
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum1 = function(root, targetSum) {

    //const [paths,path] = findPaths(root, [], [], 0);
    //findPaths(root, [], [], 0);
    //printPathsRecur(root, [], 0);
    //object.pathsArr = [];

    //let paths = [];
    //let pathsLen = 0;

    let result = false;

    (
        function findPathsOfTree(node, path=[], pathLen) {

            if(!node) {
                return
            } 
        
            const nodeVal = node.val;
            path[pathLen] = nodeVal;
            pathLen++;
            //console.log("path: ",path)
            findPathsOfTree(node.left,path,pathLen);
            findPathsOfTree(node.right,path,pathLen);
        
            if (!node.left && !node.right) {
                
                //object.pathsArr = path;
                //path = []

                while(path.length != pathLen) {
                    path.pop();
                }
                let i =  path.length-1;
                let pathSum = 0;
                while(i >= 0){
                    const pathNum = path[i];
                    pathSum = pathSum + pathNum;
                    i--;
                }

                if(pathSum === targetSum){
                    result = true;
                }
                console.log("pathSum: ", pathSum," path: ",path," pathLen: ",pathLen);
              } 
        
            //console.log(paths,path)
            //return [paths, path];
        }
    )(root,[],0);

    //console.log("object.pathsArr ",object.pathsArr);

    //console.log("paths ",paths)
    console.log("result: ",result);

    return result;
};

var object = {
    paths: [],
    pathsLen: 0,
    get pathsArr () { return this.paths === undefined ? [] : this.paths; },
    set pathsArr (v) { 
        this.paths[this.pathsLen]= v; 
        this.pathsLen++;
    }
}

function findPaths(node, paths, path=[], pathLen) {

    if(!node) {
        //paths.push(path);
        //console.log("paths: ",paths);
        return
    } 
    

    const nodeVal = node.val;
    //console.log("nodeVal: ",nodeVal);
    //console.log("path: ",path);
    //path.push(nodeVal);
    path[pathLen] = nodeVal;
    pathLen++;
    //console.log("node.left: ",path," node: ",node.left);
    findPaths(node.left,paths,path,pathLen);
    //console.log("node.right: ",path," node: ",node.right);
    findPaths(node.right,paths,path,pathLen);

    if (node.left == null && node.right == null) {
        
        //paths.push(path);
        object.pathsArr = path;
        //path = []
        console.log("path:", path);
      } 

    //console.log(paths,path)
    //return [paths, path];
}

function printPathsRecur(node, path , pathLen, paths=[]) {

    if (node == null)
            return;
 
        /* append this node to the path array */
        //path.push(node.val);
        path[pathLen] = node.val;
        pathLen++;
 
        /* it's a leaf, so print the path that lead to here */
        if (node.left == null && node.right == null) {
            //printArray(path, pathLen);
            paths.push(path);
            console.log(path)
        } else {
            /* otherwise try both subtrees */
            printPathsRecur(node.left, path, pathLen);
            printPathsRecur(node.right, path, pathLen);
        }
}

/* Utility function that prints out an array on a line. */
function printArray(ints , len) {
    var i;
    for (i = 0; i < len; i++) {
        console.log(ints[i])
        //document.write(ints[i] + " ");
    }
}

// Solution 2
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    const result =  [];
    let currentSum = 0;
    solve(root, targetSum, [], currentSum, result);
    if (result.length > 0) {
        return true;
    }
    return false;
 }

 const solve = (root, targetSum, path, currentSum, result) => {
    if (!root) {
        return;
    }
    path.push(root.val);
    currentSum += root.val;
    if (!root.left && !root.right && currentSum === targetSum) {
        result.push([...path]);
    }
    solve(root.left, targetSum, [...path], currentSum, result);
    solve(root.right, targetSum, [...path], currentSum, result);
    currentSum -= path.pop();
}

// const p = new TreeNode(1);
// p.left = new TreeNode(2);
// p.right = new TreeNode(3);

// leftRoot = p.left;
// leftRoot.left = new TreeNode(4);
// //leftRoot.right = new TreeNode(null);

// rightRoot = p.right;
// rightRoot.left = new TreeNode(5);

// rightRoot1 = rightRoot.left;
// rightRoot1.right = new TreeNode(6);

// driver program to test above functions
const root = new TreeNode(1);
root.left = new TreeNode(-2);
root.right = new TreeNode(-3);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(-2);
root.left.left.left = new TreeNode(-1);

//console.log(root);
hasPathSum(root,2);