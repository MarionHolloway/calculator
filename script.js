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

const updateCurrentValue = function(number, currentValue) {
    if (currentValue == undefined) {
        currentValue = 0;
    }    
    else if (currentValue == 0) {
        currentValue = number;
    }
    else {
        currentValue = currentValue + number;
        
    }
    return currentValue;
}

const updateDisplay = function(numberPressed) {
    const displayValue = document.querySelector('#value');
    const newValue = updateCurrentValue(numberPressed, currentValue)
    displayValue.textContent = newValue;
    return newValue;
}



const numberKeys = document.getElementsByClassName('number');

for (const numberKey of numberKeys) {
    numberKey.addEventListener('click', function() {currentValue = updateDisplay(numberKey.textContent)});
}







    