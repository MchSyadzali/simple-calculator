let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousValue = '';

function appendNumber(num) {
    if (currentInput === '0' && num === '0') return;
    if (currentInput === '0') {
        currentInput = num;
    } else {
        currentInput += num;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '' && previousValue === '') return;
    
    if (currentInput !== '') {
        if (previousValue !== '' && operator !== '') {
            calculate();
        } else {
            previousValue = currentInput;
        }
        currentInput = '';
    }
    
    operator = op;
    updateDisplay();
}

function appendDecimal() {
    if (currentInput === '') {
        currentInput = '0';
    }
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function calculate() {
    if (currentInput === '' || previousValue === '' || operator === '') return;
    
    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentInput);
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Tidak bisa dibagi dengan 0!');
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operator = '';
    previousValue = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousValue = '';
    updateDisplay();
}

function deleteLast() {
    if (currentInput !== '') {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    }
}

function updateDisplay() {
    if (currentInput === '') {
        display.value = previousValue + ' ' + operator;
    } else {
        display.value = currentInput;
    }
}

// Initialize display
updateDisplay();
