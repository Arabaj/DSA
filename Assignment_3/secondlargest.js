function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] < largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  }
  
  const array = [15, 35, 1, 13, 37, 1];
  const secondLargest = findSecondLargest(array);
  console.log("Second largest Number is ", secondLargest);