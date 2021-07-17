//Array Callback Methods

//forEach

const numbers = [1, 2, 3, 4, 5];
/*
numbers.forEach(function (num) {
  console.log(num);
});

function printTriple(n) {
  console.log(n * 3);
}

numbers.forEach(printTriple);
*/

numbers.forEach(function (num, idx) {
  console.log(idx, num);
});
