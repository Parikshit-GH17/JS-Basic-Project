let currentOperand = '';
let previousOperand = '';
let operation = undefined;

const display = document.getElementById('display');

function updateDisplay() {
  display.value = currentOperand;
}

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  currentOperand = currentOperand.toString() + number.toString();
  updateDisplay();
}

function chooseOperation(op) {
  if (currentOperand === '') return;
  if (previousOperand !== '') calculate();
  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
}

function calculate() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return;
  }

  currentOperand = computation;
  operation = undefined;
  previousOperand = '';
  updateDisplay();
}

function appendDecimal() {
  appendNumber('.');
}

function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  operation = undefined;
  updateDisplay();
}
