function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (value === '√') {
        display.value += 'Math.sqrt(';
    } else {
        display.value += value;
    }
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('√', 'Math.sqrt'));
    } catch (e) {
        display.value = 'Error';
    }
}
