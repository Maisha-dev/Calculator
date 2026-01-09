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
