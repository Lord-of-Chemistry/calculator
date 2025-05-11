let display = document.getElementById('displayText');

function clearDisplay() {
    display.textContent = '0';
}

function appendToDisplay(char) {
    if (display.textContent === '0') {
        display.textContent = char;
    } else {
        display.textContent += char;
    }
}

function calculateResult() {
    try {
        let expression = display.textContent.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(expression);
        display.textContent = result;
    } catch (e) {
        display.textContent = 'Error';
    }
}
