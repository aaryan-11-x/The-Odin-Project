// script.js

// Variables to hold the current values, operator and calculation state
let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let isSecondNumber = false;
let isDecimalUsed = false;

// Get display element
const display = document.getElementById('display');

// Functions for the basic operations
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
    if (b === 0) {
        return 'Error: Div by 0';
    }
    return a / b;
}

// Operate function that calls the appropriate operation based on the operator
function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return '';
    }
}

// Update display
function updateDisplay(value) {
    display.textContent = value;
}

// Handle number input
function handleNumber(number) {
    if (isSecondNumber) {
        secondNumber += number;
        updateDisplay(secondNumber);
    } else {
        firstNumber += number;
        updateDisplay(firstNumber);
    }
}

// Handle operator input
function handleOperator(operator) {
    if (firstNumber === '') return;

    if (secondNumber !== '') {
        firstNumber = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber)).toString();
        secondNumber = '';
    }

    currentOperator = operator;
    isSecondNumber = true;
}

// Handle decimal input
function handleDecimal() {
    if (isDecimalUsed) return; // Prevent multiple decimals
    if (isSecondNumber) {
        secondNumber += '.';
        updateDisplay(secondNumber);
    } else {
        firstNumber += '.';
        updateDisplay(firstNumber);
    }
    isDecimalUsed = true;
}

// Handle equal input
function handleEquals() {
    if (firstNumber === '' || secondNumber === '') return;

    const result = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber));
    updateDisplay(result);
    firstNumber = result.toString();
    secondNumber = '';
    currentOperator = '';
    isSecondNumber = false;
}

// Clear the calculator
function clearCalculator() {
    firstNumber = '';
    secondNumber = '';
    currentOperator = '';
    isSecondNumber = false;
    isDecimalUsed = false;
    updateDisplay('0');
}

// Backspace functionality
function backspace() {
    if (isSecondNumber) {
        secondNumber = secondNumber.slice(0, -1);
        updateDisplay(secondNumber || '0');
    } else {
        firstNumber = firstNumber.slice(0, -1);
        updateDisplay(firstNumber || '0');
    }
}

document.getElementById('clear').addEventListener('click', clearCalculator);
document.getElementById('backspace').addEventListener('click', backspace);
document.getElementById('equals').addEventListener('click', handleEquals);

document.getElementById('decimal').addEventListener('click', handleDecimal);

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (parseInt(value) >= 0 && parseInt(value) <= 9) {
            handleNumber(value);
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            handleOperator(value);
        }
    });
});
