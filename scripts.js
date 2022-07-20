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

// calculator
const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('h2');
const buttons = calculator.querySelector('.buttons');

buttons.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const btn = e.target;
        console.log(btn)
        const btnContent = btn.textContent;
        const displayedNum = display.textContent;
        if (displayedNum === '0') {
            display.textContent = btnContent;
        } else {
            display.textContent = displayedNum + btnContent;
        }
    }
});