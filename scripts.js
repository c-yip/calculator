//testing variables
let input1 = 1;
let input2 = 1;

//math functions
function add(a, b) {
    return a + b;
}

 function subtract(a, b) {
    return a - b;
}

 function multiply(a, b) {
    return a * b;
}

 function divide(a, b) {
    return a / b;
}

function operate(operator) {
    if (operator == 'operatorAdd')
        return add(input1, input2);

    if (operator == 'operatorSubtract')
        return subtract(input1, input2);

    if (operator == 'operatorMultiply')
        return multiply(input1, input2);

    if (operator == 'operatorDivide')
        return divide(input1, input2);
}

// display
display = document.querySelector('h2');
const inputToDisplay = document.querySelectorAll('.inputToDisplay');
console.log(inputToDisplay);

inputToDisplay.forEach(input => {
    input.addEventListener('click', () => console.log('bye'))
});