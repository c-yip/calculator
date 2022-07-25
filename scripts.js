const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.display');
const opDisplay = calculator.querySelector('.op-display');
const buttons = calculator.querySelector('.buttons')
const numbers = calculator.querySelectorAll('.numbers');
const operator = calculator.querySelectorAll('.operator');
const num = calculator.querySelectorAll('[data-num]');
const op = calculator.querySelectorAll('[data-op]');
const equals = calculator.querySelector('#equals');
const decimal = calculator.querySelector('#decimal');
const clear = calculator.querySelector('#clear')
let firstNum = null;
let secondNum; 
let pressedBtn;
let opPressed = null;

//event listeners
numbers.forEach(number => {
    number.addEventListener('click', e =>{
        if (display.textContent == '0' || pressedBtn == 'operator' || pressedBtn == 'equals') {
            display.textContent = e.target.textContent;
            pressedBtn = 'number';
        } else {
            display.textContent += e.target.textContent;
            pressedBtn = 'number';
        }
    console.log(`First Number: ${firstNum} Second Number: ${secondNum}`)
    })
})

operator.forEach(op => {
    op.addEventListener('click', e => {
        if (opPressed == null && pressedBtn !== 'operator') {
            pressedBtn = 'operator';
            firstNum = display.textContent;
            opPressed = e.target.dataset.op;
            opDisplay.textContent = e.target.textContent;
        } else if (pressedBtn !== 'operator') {
            secondNum = display.textContent;
            pressedBtn = 'operator';
            opDisplay.textContent = e.target.textContent;
            display.textContent = (operate(firstNum, opPressed, secondNum));
            firstNum = display.textContent;
            opPressed = e.target.dataset.op;
        } else if (pressedBtn == 'operator') {
            opPressed = e.target.dataset.op;
            opDisplay.textContent = e.target.textContent;
        }
        console.log(`First Number: ${firstNum} Second Number: ${secondNum}`)
    })
})

equals.addEventListener('click', e => {
    if (pressedBtn == 'equals' || pressedBtn == 'operator' || firstNum == null) {
        pressedBtn = 'equals';
        opPressed = null;
        opDisplay.textContent = '';
        return
    } else
    secondNum = display.textContent;
    pressedBtn = 'equals';
    console.log(`First Number: ${firstNum} Second Number: ${secondNum}`)
    display.textContent = (operate(firstNum, opPressed, secondNum));
    opPressed = null;
    opDisplay.textContent = '';
})

decimal.addEventListener('click', e => {
    if (pressedBtn !== 'decimal' && display.textContent.indexOf('.') == '-1') {
        if (display.textContent == '0') {
            display.textContent = e.target.textContent;
            pressedBtn = 'decimal';
        } else {
            display.textContent += e.target.textContent;
            pressedBtn = 'decimal';
        }
    }
})

clear.addEventListener('click', e => {
    firstNum = null;
    secondNum = null;
    pressedBtn = null;
    opPressed = null;
    display.textContent = '0';
    opDisplay.textContent = '';
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