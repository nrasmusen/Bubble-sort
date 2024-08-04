function bubbleSort(arr) {
  var run = true;

  while (run) {
    var swap = false;
    var temp = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swap = true;
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        temp = 0;
      }
    }
    if (!swap) {
      run = false;
    }
  }
  return arr;
}

//Input a random array of numbers below
var arr = [/*4, 19, 7, 38, 58, 27, 36, 18, 37, 69*/];
console.log(bubbleSort(arr)); 
