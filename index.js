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

const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter((n) => n % 2 === 1);
console.log(odds);

const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];
const badSort = prices.slice().sort(); //string
const ascSort = prices.slice().sort((a, b) => a - b);
const descSort = prices.slice().sort((a, b) => b - a);
*/

const nums = [3, 4, 5, 6];
const product = nums.reduce((total, currentVal) => {
  return total * currentVal;
});
console.log(`Product: ${product}`);

const grades = [88, 99, 75, 100, 65];
const maxGrade = grades.reduce((max, grade) => {
  if (grade > max) return grade;
  return max;
});
const minGrade = grades.reduce((min, grade) => Math.min(min, grade));
console.log(`Max: ${maxGrade}, Min: ${minGrade}`);

const votes = ["y", "n", "y"];
const results = votes.reduce((tally, vote) => {
  if (tally[vote]) {
    tally[vote]++;
  } else {
    tally[vote] = 1;
  }
  return tally;
}, {});

const results2 = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});

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

const groupedByRatings = books.reduce((group, book) => {
  const key = Math.floor(book.rating);
  if (!group[key]) group[key] = [];
  group[key].push(book);
  return group;
}, {});
console.log(groupedByRatings);
