//https://leetcode.com/problems/merge-sorted-array/
// Solution 1
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {

    nums1 = nums1.slice(0, m);
    nums2 = nums2.slice(0, n);

    nums1 = [...nums1, ...nums2];

    const numsLen = nums1.length;
    quickSort(nums1, 0, numsLen - 1);

    console.log("nums1: ",nums1," nums2: ",nums2)
};

// A utility function to swap two elements
function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

/* This function takes last element as pivot, places
the pivot element at its correct position in sorted
array, and places all smaller (smaller than pivot)
to left of pivot and all greater elements to right
of pivot */
function partition(arr, low, high) {

	// pivot
	let pivot = arr[high];

	// Index of smaller element and
	// indicates the right position
	// of pivot found so far
	let i = (low - 1);

	for (let j = low; j <= high - 1; j++) {

		// If current element is smaller
		// than the pivot
		if (arr[j] < pivot) {

			// Increment index of
			// smaller element
			i++;
			//swap(arr, i, j);
		}
	}
	swap(arr, i + 1, high);
	return (i + 1);
}

/* The main function that implements QuickSort
		arr[] --> Array to be sorted,
		low --> Starting index,
		high --> Ending index
*/
function quickSort(arr, low, high) {
    
	if (low < high) {

		// pi is partitioning index, arr[p]
		// is now at right place
		let pi = partition(arr, low, high);

		// Separately sort elements before
		// partition and after partition
		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
}


// Solution 2
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge2 = function(nums1, m, nums2, n) {
let i = nums1.length - 1;
let j = 0;
while (i >= m) {
    if (nums2[j] && j <= n) {
        nums1[i] = nums2[j];
    }
    i--;
    j++;
}
nums1.sort((x, y) => x - y);

return nums1;
};

console.log(merge2([1,2,3,0,0,0],3,[2,5,6],3))