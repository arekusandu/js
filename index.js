//Array Callback Methods

/*
//forEach
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) {
  console.log(num);
});

function printTriple(n) {
  console.log(n * 3);
}

numbers.forEach(printTriple);

numbers.forEach(function (num, idx) {
  console.log(idx, num);
});
*/

/*
//Map
const numbers = [1, 2, 3, 4, 5];
const words = ["asap", "byob", "rsvp", "diy"];

const doubles = numbers.map(function (n) {
  return n * 2;
});
console.log(doubles);

const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});
console.log(numDetail);

const abbrevs = words.map(function (word) {
  return word.toUpperCase().split("").join(".");
});
console.log(abbrevs);

*/
const books = [
  {
    title: "Cask of Amontillado",
    authors: "Edgar Allan Poe",
    rating: 9.34,
  },
  {
    title: "Brave New World",
    authors: "Aldous Huxley",
    rating: 3,
  },
  {
    title: "1984",
    authors: "George Orwell",
    rating: 6,
  },
];
const titles = books.map(function (book) {
  return book.title;
});
console.log(titles);

const goodBook = books.find((b) => b.rating >= 5);
const orwellBook = books.find((b) => b.authors.includes("Orwell"));
