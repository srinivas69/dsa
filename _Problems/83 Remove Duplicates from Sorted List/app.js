//https://leetcode.com/problems/remove-duplicates-from-sorted-list/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {

    if(!head) {
        return new ListNode();
    }

    if(!head.next) {
        return createListNodeList([head.val])
    }

    let node = head;
    let next = head.next;
    let prev = null;
    //let listRes = [];

    while(next){

        const currVal = node.val;
        let prevVal;
        if(prev)
           prevVal = prev.val;

        console.log(`val: ${currVal} prevVal ${prevVal}`);

        if(currVal == prevVal) {

            console.log(`currVal == prevVal`);

            prev.next = node.next;
        } else {

            prev = node;

            //listRes.push(currVal)
        }

       
        next = node.next;
        node = next;

    }

    //listRes = createListNodeList(listRes);
    //console.log(`listRes ${listRes}`);

    console.log("head: ",head);
    
    return head;
};

 //Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

 let removeListNode = function(head,index) {

    if(index == 0) {

        head = head.next;

        return head;
    }

    let i = 0;

    while(i != index) {

    }

    return head;
 }

 let createListNodeList = function(arr) {

    let arrLen = arr.length - 1;
    let i = 0;

    let head = null;
    let prev = null;

    while(i <= arrLen) {
        let next;

        const val = arr[i]

        if(i == 0) {

            head = new ListNode(val);
            prev = head;

        } else {

            next = new ListNode(val);
            prev.next = next;
            prev = next;
        }

        i++;
    }

    //console.log(head);

    return head;
 }

 //Solution2
 /**
 * @param {ListNode} head
 * @return {ListNode}
 */
  var deleteDuplicates2 = function(head) {

    let list = head;
        
        while(list != null) {
        	 if (list.next == null) {
        		 break;
        	 }
        	 if (list.val == list.next.val) {
        		 list.next = list.next.next;
        	 } else 
        		 list = list.next;
        }
        return head;
 }



 var head = new ListNode(1);

 //console.log(`this.val ${head.val} this.next ${head.next}`);

 const linkedList = createListNodeList([1,1,1,1,2,3,4,4,4,5]);
 //const linkedList = createListNodeList([1]);

 console.log(deleteDuplicates(linkedList));

 //console.log(`createListNodeList ${createListNodeList([1,2,3,4])}`);