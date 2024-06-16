// Get all the buttons and the input area
const buttons = document.querySelectorAll('button');
const inputArea = document.getElementById('inputArea');

// Initialize the current input
let currentInput = '';

// Function to update the display
const updateDisplay = (value) => {
    inputArea.value = value;
};

// Function to handle button clicks
const handleButtonClick = (event) => {
    const button = event.target;
    const buttonText = button.innerText;

    // Handle clear (AC) button
    if (button.classList.contains('AC')) {
        currentInput = '';
        updateDisplay('0');
        return;
    }

    // Handle delete (DEL) button
    if (button.classList.contains('Del')) {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput || '0');
        return;
    }

    // Handle equals (=) button
    if (button.classList.contains('equalButton')) {
        try {
            currentInput = eval(currentInput).toString();
        } catch {
            currentInput = 'Error';
        }
        updateDisplay(currentInput);
        return;
    }

    // Handle other buttons
    if (currentInput === 'Error') {
        currentInput = '';
    }
    currentInput += buttonText;
    updateDisplay(currentInput);
};

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
