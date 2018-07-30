function swap(index1, index2, arr) {
  let temp;
  temp = arr[index2];
  arr[index2] = arr[index1];
  arr[index1] = temp;
  return arr;
}

function compare(value1, value2) {
 console.log("compare Call");
 return value1 > value2;

}

function bubbleSort(array) {
  let arr = array;
  if (arr.length < 2) {
    return arr;
  } else {
    let order = false;
    let firstCompared = 0;
    let lastCompared = 0;
    do
    {
      order = false;
      for (let firstCompared = 0; firstCompared < arr.length-1; firstCompared++) {

        let value1 = arr[firstCompared];
        let value2 = arr[firstCompared + 1];
        if (compare(value1, value2)) {
          arr = swap(firstCompared, firstCompared + 1, arr);
          order = true;
        }
        console.log(arr);
    }
  }
    while(order);
    //lastCompared++;
    }
   // while (lastCompared < arr.length && order);


  console.log(arr);
  return arr;

}
