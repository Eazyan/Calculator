let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value === '0' && value !== '.') {
        display.value = '';
    }
    display.value += value;
    }

    function clearDisplay() {
    display.value = '0';
    }

    function calculateResult() {
    let result;
    try {
    result = eval(display.value);
    if (result === Infinity) {
        display.value = '∞';
    } else {
        display.value = result;
    }
    } catch (error) {
    display.value = 'Error';
    }
    }


    document.addEventListener('keydown', function(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || key === '.') {
    appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    appendToDisplay(key);
    } else if (key === '(' || key === ')') {
    appendToDisplay(key);
    } else if (key === 'Enter') {
    calculateResult();
    } else if (key === 'c' || key === 'C') {
    clearDisplay();
    } else if (key === '=') {
    calculateResult();
    } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
    }
});