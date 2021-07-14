let nums = [5, 6, 7, 8];
let otherNums = nums;

console.log(nums, otherNums);
console.log(`nums.push(9)`);
nums.push(9);
console.log(nums, otherNums);

//Nested Multi Dimensional Arrays
const animalPairs = [
  ["doe", "buck"],
  ["ewe", "ram"],
  ["peahen", "peacock"],
];

const target = Math.floor(Math.random() * 10);
let guess = null;
while (guess !== target) {
  guess = Math.floor(Math.random() * 10);
  console.log(`Target: ${target}, Guess: ${guess}`);
}
console.log("Congrats! You win the internet!");
