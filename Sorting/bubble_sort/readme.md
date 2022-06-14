https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/

The syntax for Optimized solution

BubbleSort(array){
  for i -> 0 to arrayLength 
     isSwapped <- false
     for j -> 0 to (arrayLength - i - 1)
      if arr[j] > arr[j + 1]
        swap(arr[j], arr[j + 1])
        isSwapped -> true
}

Complexities
Worst Case and Average case time complexity 
If the array is in reverse order then this condition is the worst case and Its time complexity is O(n2).

Best case time complexity
If the array is already sorted then it is the best-case scenario and its time complexity is O(n)

Auxiliary Space: O(1)