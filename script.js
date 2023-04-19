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

const operate = function() {
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
    if (currentValue == undefined | firstNumber != undefined | currentValue == 0) {
        currentValue = number;
    }    
    else {
        currentValue = (currentValue * 10) + number;
    }
    return currentValue;
}

const updateDisplay = function(newValue) {
    const displayValue = document.querySelector('#value');
    if (typeof(newValue) == 'number') {
        displayValue.textContent = roundForDisplay(newValue);
    }
    else {
        displayValue.textContent = newValue;
    }
    
}

const isOperator = function(key) {
    return (key == '+' |
    key == '-' |
    key == '*' |
    key == '/')
}

const roundForDisplay = function(value) {
    return Math.round(value * 100000) / 100000
}

const processNumberKey = function (key) {
    updateCurrentValue(key)
    updateDisplay(currentValue);
}

const processOperatorKey = function (key) {
    if (firstNumber == 0 | firstNumber == undefined) {
        firstNumber = Number(currentValue);
        operator = key;
        currentValue = 0;
        updateDisplay(operator);
    }
    else {
        secondNumber = Number(currentValue);
        currentValue = operate();
        firstNumber = currentValue;
        operator = key;
        updateDisplay(currentValue);
    }
}

const processEqualsKey = function (key) {
    if (firstNumber == undefined | operator == undefined) {
        return;
    }
    else {
        secondNumber = Number(currentValue);
        currentValue = operate();
        firstNumber = currentValue;
        updateDisplay(currentValue);
    }    
}

const processClearKey = function (key) {
    currentValue = 0;
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    updateDisplay(currentValue);    
}



const numberKeys = document.getElementsByClassName('number');
const operatorKeys = document.getElementsByClassName('operator');
const equalsKey = document.querySelector('#equals');
const clearKey = document.querySelector('#clear');

for (const numberKey of numberKeys) {
    numberKey.addEventListener('click', function() {processNumberKey(Number(numberKey.textContent))});
}
for (const operatorKey of operatorKeys) {
    operatorKey.addEventListener('click', function() {processOperatorKey(operatorKey.textContent)});
}
equalsKey.addEventListener('click', function() {processEqualsKey(equalsKey.textContent)});
clearKey.addEventListener('click', function() {processClearKey(clearKey.textContent)});








    