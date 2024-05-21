let number = [1,1,2,2,3,3,4,5,5,6,6];
let D = 1;

function removeDuplicatesFromArray(number) {
  for (let i = 0; i < number.length - 1; i++) {
    if (number[i] !== number[i + 1]) {
      number[D] = number[i + 1];
      D++;
    }
  }
  return D;
}

let output = removeDuplicatesFromArray(number);
console.log(output);