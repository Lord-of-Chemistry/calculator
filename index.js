let display = document.getElementById('displayText')

function clearDisplay() {
    display.textContent = 0
}

function appendToDisplay(char) {
    if (display.textContent === 0) {
        let display = document.getElementById('displayText');
        display.textContent = char;
    } else {
        display.textContent += char;
    }

}

function calculateResult() {
    const display = document.getElementById('displayText');
    try {
        display.textContent = eval(display.textContent.replace('×', '*').replace('÷', '/'));
        display.textContent = display.textContent.replace('*', '×').replace('/', '÷');
    } catch (e) {
        display.textContent = 'Error';
    }
}
