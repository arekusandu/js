const target = Math.floor(Math.random() * 10);
let guess = null;
while (guess !== target) {
  guess = Math.floor(Math.random() * 10);
  console.log(`Target: ${target}, Guess: ${guess}`);
}
console.log("Congrats! You win the internet!");

