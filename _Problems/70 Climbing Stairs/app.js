//https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    
    //climbStairsBinaryTree("1");

    if(n < 1 || n > 45)
       return 0;

    if(n==1)
      return 1;

    if(n==2)
      return 2;

    const oneDistWays = Math.pow(2,n) -1;
    const twoDistWays = Math.pow(2,n-1) -1;

    // create distinct ways with root as 1

    const distWaysMap = new Map();
    distWaysMap.set(n,[]);

    const oneQueue = [1];
    const twoQueue = [2];

    let oneQueItems = 1;
    let twoQueItems = 1;

    console.log(`oneDistWays ${oneDistWays} twoDistWays ${twoDistWays} distWaysMap ${distWaysMap.get(n)}`);

    (function runQueue(first) {

        const left = first + 1;
        const right = first + 2;

        if(left == n){

            distWaysMap.get(n).push(left);
        }

        if(right == n){

            distWaysMap.get(n).push(right);
        }

        if(oneQueItems <= oneDistWays) {

            if(left < n)
               oneQueue.push(left);

            if(right < n)
               oneQueue.push(right);

            //dequeue first item
            oneQueue.shift();
            oneQueItems++;
            return runQueue.call(this,oneQueue[0]);
        }

        return;
    })(oneQueue[0]);
    

    (function runQueue(first) {

        const left = first + 1;
        const right = first + 2;

        if(left == n){

            distWaysMap.get(n).push(left);
        }

        if(right == n){

            distWaysMap.get(n).push(right);
        }

        if(twoQueItems <= oneDistWays) {

            if(left < n)
               twoQueue.push(left,right);

            if(right < n)
               twoQueue.push(right);
            //dequeue first item
            twoQueue.shift();
            twoQueItems++;
            return runQueue.call(this,twoQueue[0]);
        }

        return;
    })(twoQueue[0]);

    console.log(`oneDistWays ${oneDistWays} twoDistWays ${twoDistWays} distWaysMap ${distWaysMap.get(n)}`);
    return distWaysMap.get(n).length;
};

/**
 * @param {number} n
 * @return {number}
 */
// Solution 2
 var climbStairs2 = function(n) {

    if(n < 1 || n > 45)
       return 0;

    if(n==1)
      return 1;

    if(n==2)
      return 2;

    const oneDistWays = Math.pow(2,n) -1;
    const twoDistWays = Math.pow(2,n-1) -1;

    const distWaysMap = new Map();
    distWaysMap.set(n,[]);

    let oneHead = new ListNode(1);
    let twoHead = new ListNode(2);

    let lastOneHead = oneHead;
    let lastTwoHead = twoHead;

    let oneQueItems=1, twoQueItems = 1;

    //console.log(`oneDistWays ${oneDistWays} twoDistWays ${twoDistWays} oneQueItems ${oneQueItems} twoQueItems${twoQueItems}`);

    (function runQueue(head) {

        const left = head.val + 1;
        const right = head.val + 2;

        if(left == n){

            distWaysMap.get(n).push(left);
        }

        if(right == n){

            distWaysMap.get(n).push(right);
        }

        if(oneQueItems <= oneDistWays) {

            //dequeue first item
            const leftNode = new ListNode(left);
            const rightNode = new ListNode(right);
            oneHead.next = leftNode;
            oneHead.next.next = rightNode;
            lastOneHead.next = leftNode;
            lastOneHead.next.next = rightNode;
            lastOneHead = oneHead.next.next;
            // dequeue head
            oneHead = oneHead.next;
            oneQueItems++;
            return runQueue.call(this,oneHead);
        }

        return;
    })(oneHead);

    return distWaysMap.get(n).length;
 }

//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {number} n
 * @return {number}
 */
// Solution 3
// solution link https://www.youtube.com/watch?v=Y0lT9Fck7qI
// fibanooci
var climbStairs = function(n) {

    if(n < 1 || n > 45)
       return 0;

    let result = 1;
    let prevResult = 0;

    while (n>0) {

        const newResult = prevResult + result;
        prevResult = result;
        result = newResult;
        n--;
    }

    return result;

}

console.log(climbStairs(2));