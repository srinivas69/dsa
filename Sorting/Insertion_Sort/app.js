// Javascript program for insertion sort

// Function to sort an array using insertion sort
function insertionSort(arr, n)
{
    const timeNow = new Date().getTime();
	let i, key, j;
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;

		/* Move elements of arr[0..i-1], that are
		greater than key, to one position ahead
		of their current position */
		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}

    const timeNowAft = new Date().getTime();

    console.log(`timeTaken: ${timeNowAft-timeNow}`);
}

// A utility function to print an array of size n
function printArray(arr, n)
{
    console.log(arr);

    const arrLen = arr.length - 1;

    const arrRev = [];

    for (i = arrLen; i > -1; i--) {
        //console.log(arr[i] + " ");
        arrRev.push(arr[i]);
    }

    console.log("arrRev: ",arrRev);

	// let i;
	// for (i = 0; i < n; i++)
    //     console.log(arr[i] + " ");
	// 	//document.write(arr[i] + " ");
	// //document.write("<br>");
}

// Driver code
	//let arr = [12, 11, 13, 5, 6 ];
    //let arr = [3, 5, 23, 35, 45, 243, 356, 5346];
    let arr = [243, 45, 239, 356, 3, 1, 5346, 35, 5, 199, 5300, 40, 23, 357, 4, 39, 250];
    //let arr = [5346, 5300, 357, 356,243,  199,  45,  40, 35,   23,   5,   3,  1]
	let n = arr.length;

	insertionSort(arr, n);
	printArray(arr, n);
