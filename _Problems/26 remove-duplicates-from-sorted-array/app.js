//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    
    const q = new Queue();
    for(num of nums){

        //console.log(num, q.isEmpty());

        if(q.isEmpty()) {

            q.enqueue(num);
            //console.log(q);
        } else {

             //console.log("q.last()", q.last());
            if(q.last() != num) {

                q.enqueue(num)
            }
        }
    }

    console.log(q);

    let i = 0;
    let k = 0;
    while(i<nums.length){

        const element = q.dequeue();

        if(element != "Underflow") {
            nums[i] = element;
            k++;
        } else {
            nums[i] = "_";
        }
        i++;
    }

    console.log(k, nums);
    return k;
};


function Queue() {

    this.items = []
}

Queue.prototype.enqueue = function(element){
    // adding element to the queue
    this.items.push(element);
}


Queue.prototype.dequeue = function(){
   // removing element from the queue
	// returns underflow when called
	// on empty queue
	if(this.isEmpty())
      return "Underflow";
    return this.items.shift();
}

Queue.prototype.front = function(){
	// returns the Front element of
	// the queue without removing it.
	if(this.isEmpty())
		return "No elements in Queue";
	return this.items[0];
}

Queue.prototype.last = function(){
	// returns the last element of
	// the queue without removing it.
	if(this.isEmpty())
		return "No elements in Queue";
	return this.items[this.items.length-1];
}

// isEmpty function
Queue.prototype.isEmpty = function()
{
	// return true if the queue is empty.
	return this.items.length == 0;
}

// printQueue function
Queue.prototype.printQueue = function()
{
	var str = "";
	for(var i = 0; i < this.items.length; i++)
		str += this.items[i] +" ";
	return str;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
// solution 2
 var removeDuplicatesSol2 = function(nums) {

    const q = [];
    for(num of nums){

        //console.log(num, q.isEmpty());

        if(q.length == 0) {

            q.push(num);
            //console.log(q);
        } else {

             //console.log("q.last()", q.last());
            if(q[q.length-1] != num) {

                q.push(num)
            }
        }
    }

    console.log(q);

    let i = 0;
    let k = 0;
    while(i<nums.length){

        let element = "Underflow";
        
        if(q.length != 0){
            element = q.shift()
        }

        if(element != "Underflow") {
            nums[i] = element;
            k++;
        } else {
            nums[i] = "_";
        }
        i++;
    }

    console.log(k, nums);
    return k;

 }

 /**
 * @param {number[]} nums
 * @return {number}
 */
// solution 3
var removeDuplicatesSol3 = function(nums) {

    if(nums.length < 1 && nums.length >= 3 * 10^4) {

        return 0;
    }

    let l = 1

    for(let r=0; r<nums.length; r++) {
        if((r+1)<nums.length) {

            if(nums[r] != nums[r+1]){

                nums[l] = nums[r+1];
                l++;
            }
        } else {

            for(let i=l; i<nums.length; i++) {

                nums[i] = "_"; 
            }
        }
    }

    for(let i=l; i<nums.length; i++) {

        nums[i] = "_"; 
    }

    console.log(l, nums);
    return l;
}

 removeDuplicatesSol3([0,0,1,1,1,1,2,2,2,3])
 //removeDuplicatesSol3([1,2,3])

