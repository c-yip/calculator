const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.display');
const opDisplay = calculator.querySelector('.op-display');
const buttons = calculator.querySelector('.buttons')
const numbers = calculator.querySelectorAll('.numbers');
const operator = calculator.querySelectorAll('.operator');
const num = calculator.querySelectorAll('[data-num]');
const op = calculator.querySelectorAll('[data-op]');
const equals = calculator.querySelector('#equals');
let firstNum;
let secondNum; 
let pressedBtn;
let opPressed;

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
        opPressed = e.target.dataset.op;
        console.log(opPressed);
    })
})

equals.addEventListener('click', e => {
    secondNum = display.textContent;
    opPressed = 'equals';
    return display.textContent = (operate(firstNum, opPressed, secondNum));
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