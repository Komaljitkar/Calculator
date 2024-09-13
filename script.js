const display = document.getElementById("display");

// Append a number to the display
function appendNumber(number) {
    if (display.value === "0 " || display.value === "Invalid input") {
        display.value = number; // Replace the display value if it's "0" or an error message
    } else {
        display.value += number; // Append the number
    }
}

// Reset the display to default value
function reset() {
    display.value = " ";
}
// Append an operator to the display
function appendOperator(operator) {
    const firstChar = display.value[0]; // The first character in the display
    const lastChar = display.value[display.value.length - 1]; // The last character in the display

    // Check if the first character is not allowed to be '*', '/', or '.'
    if (display.value.length === 1 && (operator === '*' || operator === '/' || operator === '.')) {
        display.value = "Invalid input";
        return;
    }

    // Allow only '+' or '-' as the first character if the input starts with an operator
    if (display.value.length === 0 && (operator !== '+' && operator !== '-')) {
        display.value = "Invalid input.";
        return;
    }

    // Check for invalid consecutive operators
    if (isNaN(lastChar) && (operator === '+' || operator === '-' || operator === '*' || operator === '/' || operator === '.')) {
        display.value = "Invalid input.";
        return;
    }

    // Append the operator if all conditions are met
    display.value += operator;
}


// Delete the last character from the display
function deleteChar() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") display.value = " "; // Reset to default if display is empty
}



// Calculate the result of the expression
function calculateResult() {
    try {
        // if result is in decimal then limit to 3 decimal places
        let result = eval(display.value);
        display.value = Number.isInteger(result) ? result : result.toFixed(3);
    } catch {
        display.value = "Error"; 
    }
}
