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
    if (currentValue == undefined) {
        currentValue = number;
    }    
    else if (currentValue == 0) {
        currentValue = number;
    }
    else if (firstNumber == undefined) {
        currentValue = (currentValue * 10) + number;
    }
    else if (firstNumber != undefined) {
        currentValue = number;
    }
    return currentValue;
}

const updateDisplay = function(newValue) {
    const displayValue = document.querySelector('#value');
    displayValue.textContent = newValue;
}

const isOperator = function(key) {
    return (key == '+' |
    key == '-' |
    key == '*' |
    key == '/')
}

const processNumberKey = function (key) {
    updateCurrentValue(key)
    const roundedValue = Math.round(currentValue * 100000) / 100000;
    updateDisplay(roundedValue);
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
        const roundedValue = Math.round(currentValue * 100000) / 100000;
        updateDisplay(roundedValue);
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
        const roundedValue = Math.round(currentValue * 100000) / 100000;
        updateDisplay(roundedValue);
    }    
}

const processClearKey = function (key) {
    currentValue = 0;
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    const roundedValue = Math.round(currentValue * 100000) / 100000;
    updateDisplay(roundedValue);    
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








    