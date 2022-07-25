const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.display');
const opDisplay = calculator.querySelector('.op-display');
const buttons = calculator.querySelector('.buttons')
const numbers = calculator.querySelectorAll('.numbers');
const operator = calculator.querySelectorAll('.operator');
const num = calculator.querySelectorAll('[data-num]');
const op = calculator.querySelectorAll('[data-op]');
let firstNum;
let secondNum;
let pressedBtn;

//event listeners
numbers.forEach(number => {
    number.addEventListener('click', e =>{
        if (display.textContent == '0' || pressedBtn == 'operator') {
            display.textContent = e.target.textContent;
            pressedBtn = 'number';
        } else {
            display.textContent += e.target.textContent;
        }
    })
})

operator.forEach(op => {
    op.addEventListener('click', e => {
        opDisplay.textContent = e.target.textContent;

        firstNum = display.textContent;
        console.log(firstNum);

        pressedBtn = 'operator';
    })
})

// math function
function operate(a, operator, b) {
    let result;
    if (operator == 'add') {
        result = parseFloat(a) + parseFloat(b);
    }
    if (operator == 'subtract') {
        result = parseFloat(a) - parseFloat(b);
    }
    if (operator == 'divide') {
        result = parseFloat(a) / parseFloat(b);
    }
    if (operator == 'multiply') {
        result = parseFloat(a) * parseFloat(b);
    }
    return result;
}