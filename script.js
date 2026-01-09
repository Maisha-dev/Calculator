function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b == 0) {
    return "Try another number";
  }
  return a / b;
}

console.log(divide(3, 0));

let firstNumber = null;
let secondNumber = null;
let operator = null;
let shouldResetDisplay = false;

function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    return "Use a valid operator";
  }
}

console.log(operate("+", 3, 5));
console.log(operate("-", 3, 5));
console.log(operate("/", 3, 0));

let displayValue = 0;
function inputNumber(number) {}
