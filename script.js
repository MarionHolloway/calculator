const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

let firstNumber;
let operator;
let secondNumber;

const operate = function(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }
}

let currentValue;

const updateCurrentValue = function(number) {
    if (currentValue == undefined) {
        currentValue = number;
    }    
    else if (currentValue == '0') {
        currentValue = number;
    }
    else {
        currentValue = currentValue + number;
        
    }
    return currentValue;
}

const updateDisplay = function(newValue) {
    const displayValue = document.querySelector('#value');
    displayValue.textContent = newValue;
    return newValue;
}

const isNumber = function(key) {
    return (key == '0' |
    key == '1' |
    key == '2' |
    key == '3' |
    key == '4' |
    key == '5' |
    key == '6' |
    key == '7' |
    key == '8' |
    key == '9')
}

const isOperator = function(key) {
    return (key == '+' |
    key == '-' |
    key == '*' |
    key == '/')
}


const processKey = function(key) {
    if (isNumber(key)) {
        updateCurrentValue(key)
        updateDisplay(currentValue);
    }
    else if (isOperator(key)) {
        firstNumber = Number(currentValue);
        operator = key;
        currentValue = '0';
        updateDisplay (operator);
    }
    else if (key == '=') {
        secondNumber = Number(currentValue);
        updateDisplay(operate(firstNumber, operator, secondNumber))
    }
    else if (key == 'CL') {
        currentValue = '0';
        updateDisplay(currentValue);
    }
}

const numberKeys = document.getElementsByClassName('number');

for (const numberKey of numberKeys) {
    numberKey.addEventListener('click', function() {processKey(numberKey.textContent)});
}

const operatorKeys = document.getElementsByClassName('operator');

for (const operatorKey of operatorKeys) {
    operatorKey.addEventListener('click', function() {processKey(operatorKey.textContent)});
}

const equalsKey = document.querySelector('#equals');
equalsKey.addEventListener('click', function() {processKey(equalsKey.textContent)});

const clearKey = document.querySelector('#clear');
clearKey.addEventListener('click', function() {processKey(clearKey.textContent)});








    