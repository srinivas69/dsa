//https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {

    if(s.length==0 || s.length==1){
        return false;
    }

    var paranStack = [];

    for(let i=0; i<s.length; i++){

        /*if(i==0){

            const firstPar = s[0];
            push(paranStack,firstPar);
            continue;
        }*/

        const nextElement = s[i];
        const peekEleStack = peek(paranStack);

        //console.log(`nextElement ${nextElement} peekEleStack ${peekEleStack}`);

        if(peekEleStack && peekEleStack === "(" && nextElement === ")") {
             pop(paranStack);
             continue;
        }

        if(peekEleStack && peekEleStack === "[" && nextElement === "]") {
             pop(paranStack);
             continue;
        }

        if(peekEleStack && peekEleStack === "{" && nextElement === "}") {
             pop(paranStack);
             continue;
        }         

        this.paranStack = push(paranStack,nextElement);
    }

    //console.log(paranStack)

    if(isEmpty(paranStack)) {

        return true;
    } else {

        return false;
    }
    
};

// push function
function push(paranStack,element)
{
   // push element into the items
   paranStack.push(element);
}

// pop function
function pop(paranStack)
{
     // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (paranStack.length == 0)
          return "Underflow";
    return paranStack.pop();
}

 // peek function
 function peek(paranStack)
 {
     // return the top most element from the stack
     // but does'nt delete it.
     return paranStack[paranStack.length - 1];
 }

 // isEmpty function
function isEmpty(paranStack)
{
	// return true if stack is empty
	return paranStack.length == 0;
}

console.log(isValid("([{}])[]{}"));