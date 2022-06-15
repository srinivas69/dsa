// Optimized implementation of bubble sort Algorithm

function bubbleSort(arr){

    const timeNow = new Date().getTime();
	
    var i, j;
    var len = arr.length;
        
    var isSwapped = false;
        
    for(i =0; i < len; i++){
        
        isSwapped = false;
        
        for(j = 0; j < len; j++){
            if(arr[j] > arr[j + 1]){
            var temp = arr[j]
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            isSwapped = true;
            }
        }
        
        // IF no two elements were swapped by inner loop, then break
        
        //console.log(`${i} ${isSwapped}`);
        if(!isSwapped){
        break;
        }
    }
        
    const timeNowAft = new Date().getTime();

    console.log(`timeTaken: ${timeNowAft-timeNow}`);

    // Print the array
    console.log(arr)
    }
    
    
    //var arr = [243, 45, 23, 356, 3, 5346, 35, 5];

    var arr = [243, 45, 356, 3, 1, 5346, 35, 5, 199, 5300, 40, 23, 357];

    //var arr = [3, 5, 23, 35, 45, 243, 356, 5346];

    //var arr =  [1, 3, 5, 23,35, 40, 45, 199, 243, 356, 357, 5300, 5346];
    
    // calling the bubbleSort Function
    bubbleSort(arr)
    