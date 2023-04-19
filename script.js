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


const processKey = function(key) {
    if (typeof(key) == 'number') {
        updateCurrentValue(key)
        updateDisplay(currentValue);
    }
    else if (isOperator(key)) {
        if (firstNumber == 0 | firstNumber == undefined) {
            firstNumber = Number(currentValue);
            operator = key;
            currentValue = 0;
            updateDisplay (operator);
        }
        else {
            secondNumber = Number(currentValue);
            currentValue = operate();
            firstNumber = currentValue;
            updateDisplay(currentValue);
        }
    }
    else if (key == '=') {
        secondNumber = Number(currentValue);
        currentValue = operate();
        firstNumber = currentValue;
        updateDisplay(currentValue);
    }
    else if (key == 'CL') {
        currentValue = undefined;
        firstNumber = undefined;
        secondNumber = undefined;
        operator = undefined;
        updateDisplay(currentValue);
    }
}

const numberKeys = document.getElementsByClassName('number');

for (const numberKey of numberKeys) {
    numberKey.addEventListener('click', function() {processKey(Number(numberKey.textContent))});
}

const operatorKeys = document.getElementsByClassName('operator');

for (const operatorKey of operatorKeys) {
    operatorKey.addEventListener('click', function() {processKey(operatorKey.textContent)});
}

const equalsKey = document.querySelector('#equals');
equalsKey.addEventListener('click', function() {processKey(equalsKey.textContent)});

const clearKey = document.querySelector('#clear');
clearKey.addEventListener('click', function() {processKey(clearKey.textContent)});








    