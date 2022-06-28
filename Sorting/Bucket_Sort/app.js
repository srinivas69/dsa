const bucketSort = arr => {
    if (arr.length === 0) {
       return arr;
    }
    //Create variables for i, min, max, and bucket size
    let i,
    minValue = arr[0],
    maxValue = arr[0],
    bucketSize = 5;

    //Find min and max value
    arr.forEach(function (currentVal) {
       if (currentVal < minValue) {
          minValue = currentVal;
       } else if (currentVal > maxValue) {
          maxValue = currentVal;
       }
    });

    //Create amount of buckets
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let allBuckets = new Array(bucketCount);
    for (i = 0; i < allBuckets.length; i++) {
       allBuckets[i] = [];
    }

    //Push values to correct buckets
    arr.forEach(function (currentVal) {
       allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
    });

    //Sort buckets
    arr.length = 0;
    allBuckets.forEach(function(bucket) {
       insertion(bucket);
       bucket.forEach(function (element) {
          arr.push(element)
       });
    });
    return arr;
 }

 // Insertion sort
 const insertion = arr => {
    let length = arr.length;
    let i, j;
    for(i = 1; i < length; i++) {
       let temp = arr[i];
       for(j = i - 1; j >= 0 && arr[j] > temp; j--) {
          arr[j+1] = arr[j];
       }
       arr[j+1] = temp;
    }
    return arr;
 };

 const arr = [32, 6, 34, 4, 78, 1, 6767, 4, 65, 34, 879, 7];
 console.log(bucketSort(arr));