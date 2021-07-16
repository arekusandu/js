const add = function (a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
}

const operations = [add, subtract, multiply, divide];

for (let func of operations) {
  let result = func(30, 5);
  console.log(result);
}

const thing = {
  doSomething: multiply,
};
