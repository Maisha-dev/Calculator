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

let firstNumber = null;
let secondNumber = null;
let operator = null;
let shouldResetDisplay = false;

let displayValue = "0";

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

const display = document.querySelector(".display");

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

display.textContent = displayValue;

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

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (!isNaN(value) || value === ".") {
      inputNumber(value);
      display.textContent = displayValue;
    }
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      firstNumber = Number(displayValue);
      operator = value;
      shouldResetDisplay = true;
    }
    console.log(firstNumber, operator, displayValue);

    console.log(btn.textContent);

    if (value === "=") {
      handleEquals();
      display.textContent = displayValue;
      return;
    }

    if (value.toLowerCase() === "c") {
      displayValue = "0";
      firstNumber = null;
      secondNumber = null;
      operator = null;
      shouldResetDisplay = false;
      display.textContent = displayValue;
    }
  });
});
