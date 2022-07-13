//https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// User defined class node
class Node {
	// constructor
	constructor(element)
	{
		this.element = element;
		this.next = null
	}
}

// linkedlist class
class ListNode {

	constructor()
	{
		this.head = null;
		this.size = 0;
	}

    // adds an element at the end
// of list
add(element)
{
	// creates a new node
	var node = new Node(element);

	// to store current node
	var current;

	// if list is Empty add the
	// element and make it head
	if (this.head == null)
		this.head = node;
	else {
		current = this.head;

		// iterate to the end of the
		// list
		while (current.next) {
			current = current.next;
		}

		// add node
		current.next = node;
	}
	this.size++;
}

// insert element at the position index
// of the list
insertAt(element, index)
{
	if (index < 0 || index > this.size)
		return console.log("Please enter a valid index.");
	else {
		// creates a new node
		var node = new Node(element);
		var curr, prev;

		curr = this.head;

		// add the element to the
		// first index
		if (index == 0) {
			node.next = this.head;
			this.head = node;
		} else {
			curr = this.head;
			var it = 0;

			// iterate over the list to find
			// the position to insert
			while (it < index) {
				it++;
				prev = curr;
				curr = curr.next;
			}

			// adding an element
			node.next = curr;
			prev.next = node;
		}
		this.size++;
	}
}


// removes an element from the
// specified location
removeFrom(index)
{
	if (index < 0 || index >= this.size)
		return console.log("Please Enter a valid index");
	else {
		var curr, prev, it = 0;
		curr = this.head;
		prev = curr;

		// deleting first element
		if (index === 0) {
			this.head = curr.next;
		} else {
			// iterate over the list to the
			// position to removce an element
			while (it < index) {
				it++;
				prev = curr;
				curr = curr.next;
			}

			// remove the element
			prev.next = curr.next;
		}
		this.size--;

		// return the remove element
		return curr.element;
	}
}

// removes a given element from the
// list
removeElement(element)
{
	var current = this.head;
	var prev = null;

	// iterate over the list
	while (current != null) {
		// comparing element with current
		// element if found then remove the
		// and return true
		if (current.element === element) {
			if (prev == null) {
				this.head = current.next;
			} else {
				prev.next = current.next;
			}
			this.size--;
			return current.element;
		}
		prev = current;
		current = current.next;
	}
	return -1;
}

// finds the index of element
indexOf(element)
{
	var count = 0;
	var current = this.head;

	// iterate over the list
	while (current != null) {
		// compare each element of the list
		// with given element
		if (current.element === element)
			return count;
		count++;
		current = current.next;
	}

	// not found
	return -1;
}

// checks the list for empty
isEmpty()
{
	return this.size == 0;
}

// gives the size of the list
size_of_list()
{
	console.log(this.size);
	return this.size;
}

// prints the list items
printList()
{
	var curr = this.head;
	var str = "";
	while (curr) {
		str += curr.element + " ";
		curr = curr.next;
	}
	console.log(str);
}


}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    
	const finalList = list1;

	let curr = list2.head;
	while (curr) {
		const element = curr.element;
		finalList.add(element);
		curr = curr.next;
	}

	const size = finalList.size_of_list();

	mergeSort(finalList, 0, size-1)
};

function mergeSort(list,l, r){
	if(l>=r){
		return;//returns recursively
	}
	var m =l+ parseInt((r-l)/2);
	mergeSort(list,l,m);
	mergeSort(list,m+1,r);
	merge(list,l,m,r);
}

function merge(arr, l, m, r)
{
	var n1 = m - l + 1;
	var n2 = r - m;

	// Create temp arrays
	var L = new ListNode();
	var R = new ListNode();

	// Copy data to temp arrays L[] and R[]
	for (var i = 0; i < n1; i++)
		L[i] = arr[l + i];
	for (var j = 0; j < n2; j++)
		R[j] = arr[m + 1 + j];
}

var ll1 = new ListNode();
var ll2 = new ListNode();

// adding element to the list
ll1.add(10);
 
// adding more elements to the list
ll1.add(20);
ll1.add(30);
ll1.add(40);
ll1.add(50);

ll2.add(11);
ll2.add(21);
ll2.add(31);
ll2.add(41);
ll2.add(51);

mergeTwoLists(ll1,ll2);

var mergeTwoLists2 = function(list1, list2) {
    let head = null;
    let prev;

    while (list1 || list2) {
        let next;

        if (list1 && list2) {
            if (list1.val < list2.val) {
                next = list1;
                list1 = list1.next;
            } else {
                next = list2;
                list2 = list2.next;
            }
        } else if (list1) {
            next = list1;
            list1 = list1.next;
        } else if (list2) {
            next = list2;
            list2 = list2.next;
        }
        
        if (prev) {
            prev.next = next;
        }
        
        prev = next;
        
        if (!head) {
            head = next;
        }
    }
    
    return head;
};