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
    return null;
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

let displayValue = "0";
function inputNumber(number) {
  if (shouldResetDisplay) {
    displayValue = number;
    shouldResetDisplay = false;
    return;
  }
  if (displayValue == 0) {
    displayValue = number;
  } else {
    displayValue += number;
  }
}

inputNumber("3");
console.log(displayValue);

inputNumber("5");
console.log(displayValue);

shouldResetDisplay = true;

function handleOperator(op) {
  if (firstNumber !== null && operator !== null) {
    secondNumber = Number(displayValue);
    const result = operate(operator, firstNumber, secondNumber);
    displayValue = String(result);
    firstNumber = result;
  } else {
    firstNumber = Number(displayValue);
  }
  operator = op;
  shouldResetDisplay = true;
}

function handleEquals() {
  if (firstNumber === null || operator === null) return;
  secondNumber = Number(displayValue);
  const result = operate(operator, firstNumber, secondNumber);

  displayValue = String(result);
  firstNumber = null;
  operator = null;
  shouldResetDisplay = true;
}

inputNumber("1");
inputNumber("2");
handleOperator("+");
inputNumber("7");
handleOperator("-");
inputNumber("1");
handleEquals();
console.log(displayValue);
