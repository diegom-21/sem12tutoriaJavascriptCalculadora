// script.js

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    
    let displayValue = '0';
    let firstValue = null;
    let operator = null;
    let waitingForSecondValue = false;

    function updateDisplay() {
        display.innerText = displayValue;
    }

    function handleNumber(number) {
        if (waitingForSecondValue) {
            displayValue = number;
            waitingForSecondValue = false;
        } else {
            displayValue = displayValue === '0' ? number : displayValue + number;
        }
    }

    function handleOperator(nextOperator) {
        const value = parseFloat(displayValue);

        if (operator && waitingForSecondValue) {
            operator = nextOperator;
            return;
        }

        if (firstValue === null && !isNaN(value)) {
            firstValue = value;
        } else if (operator) {
            const result = calculate(firstValue, value, operator);
            displayValue = `${parseFloat(result.toFixed(7))}`;
            firstValue = result;
        }

        waitingForSecondValue = true;
        operator = nextOperator;
    }

    function calculate(first, second, operator) {
        if (operator === '+') return first + second;
        if (operator === '-') return first - second;
        if (operator === '*') return first * second;
        if (operator === '/') return first / second;
        return second;
    }

    function resetCalculator() {
        displayValue = '0';
        firstValue = null;
        operator = null;
        waitingForSecondValue = false;
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const { innerText: value } = button;

            if (button.classList.contains('operator')) {
                if (value === 'C') {
                    resetCalculator();
                } else if (value === '=') {
                    handleOperator(null);
                } else {
                    handleOperator(value);
                }
            } else {
                handleNumber(value);
            }

            updateDisplay();
        });
    });

    updateDisplay();
});
