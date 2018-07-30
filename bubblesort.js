function swap(index1, index2, arr) {
  let temp;
  temp = arr[index2];
  arr[index2] = arr[index1];
  arr[index1] = temp;
  return arr;
}

function compare(value1, value2) {
  return value1 > value2;
}

function bubbleSort(array) {
  let arr = array;
  if (arr.length < 2) {
    console.log(arr);
    return arr;
  } else {
    let firstCompared = 0;
    let lastCompared = arr.length + 1;

    while (lastCompared > 0) {
      for (let firstCompared = 0; firstCompared < lastCompared; firstCompared++) {
        let value1 = arr[firstCompared];
        let value2 = arr[firstCompared + 1];
        if (compare(value1, value2)) {
          arr = swap(firstCompared, firstCompared + 1, arr);
        }
        lastCompared--;
    }
    }
  }
  console.log(arr);
  return arr;




}
