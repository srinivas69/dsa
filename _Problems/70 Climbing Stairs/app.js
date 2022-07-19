/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    
    climbStairsBinaryTree("1");

    console.log(this.root);
};

function climbStairsNode(data, left, right) {
    this.data = (data===undefined ? 0 : data)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function climbStairsBinaryTree(root) {

    this.root = (root===undefined ? null : root);
}

console.log(climbStairs(2));