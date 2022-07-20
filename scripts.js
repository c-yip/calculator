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
const numbers = buttons.querySelectorAll('.numbers');

// numbers.forEach(item => {
//     item.addEventListener('click', e => {
//         if (display.textContent === '0') {
//             display.textContent = item.textContent;
//         } else {
//             display.textContent = display.textContent + item.textContent;
//             let displayValue = display.textContent;
//             console.log(displayValue);
//         }
//     })
// })

buttons.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const btn = e.target;
        const action = btn.dataset.action;
        const btnContent = btn.textContent;
        const displayedNum = display.textContent;
        //displays number
        if (!action) {
            if (displayedNum === '0') {
                display.textContent = btnContent;
            } else {
                display.textContent = displayedNum + btnContent;
            }
        }

        if (action === 'decimal') {
            display.textContent = displayedNum + '.';
        }

        if (action == 'add' || action == 'subtract' || action == 'multiply' || action == 'divide') {
            if (displayedNum === '0') {
                display.textContent = btnContent;
            } else {
                display.textContent = displayedNum +  " " + btnContent + " ";
            }

            calculator.dataset.previousKeyType = 'operator';
        }
    }
});