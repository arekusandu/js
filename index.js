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

//Functions as Arguments
function callThreeTimes(f) {
  f();
  f();
  f();
}

function printHello() {
  console.log("Hello World!");
}

callThreeTimes(printHello);
//Functions as Return Values
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);
