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
const clear = calculator.querySelector('#clear');
const backspace = calculator.querySelector('#backspace');

let firstNum = null;
let secondNum; 
let pressedBtn;
let opPressed = null;

//event listeners
numbers.forEach(number => {
    number.addEventListener('click', () => numberSelection(number.textContent))
})

document.addEventListener('keydown', e => {
    if (e.key >= 0 && e.key <= 9) {
        numberSelection(e.key);
    }

    if (e.key === '+') {
        if (opPressed == null && pressedBtn !== 'operator') {
            pressedBtn = 'operator';
            firstNum = display.textContent;
            opPressed = 'add';
            opDisplay.textContent = e.key;
        } else if (pressedBtn !== 'operator') {
            secondNum = display.textContent;
            pressedBtn = 'operator';
            opDisplay.textContent = e.key;
            display.textContent = (operate(firstNum, opPressed, secondNum));
            firstNum = display.textContent;
            opPressed = 'add';
        } else if (pressedBtn == 'operator') {
            opPressed = 'add';
            opDisplay.textContent = e.key;
        }
        console.log(`First Number: ${firstNum} Second Number: ${secondNum}`)
    } 
    if (e.key === '-') {
        if (opPressed == null && pressedBtn !== 'operator') {
            pressedBtn = 'operator';
            firstNum = display.textContent;
            opPressed = 'subtract';
            opDisplay.textContent = e.key;
        } else if (pressedBtn !== 'operator') {
            secondNum = display.textContent;
            pressedBtn = 'operator';
            opDisplay.textContent = e.key;
            display.textContent = (operate(firstNum, opPressed, secondNum));
            firstNum = display.textContent;
            opPressed = 'subtract';
        } else if (pressedBtn == 'operator') {
            opPressed = 'subtract';
            opDisplay.textContent = e.key;
        }
        console.log(`First Number: ${firstNum} Second Number: ${secondNum}`)
    } 
    if (e.key === '*') {
        if (opPressed == null && pressedBtn !== 'operator') {
            pressedBtn = 'operator';
            firstNum = display.textContent;
            opPressed = 'multiply';
            opDisplay.textContent = e.key;
        } else if (pressedBtn !== 'operator') {
            secondNum = display.textContent;
            pressedBtn = 'operator';
            opDisplay.textContent = e.key;
            display.textContent = (operate(firstNum, opPressed, secondNum));
            firstNum = display.textContent;
            opPressed = 'multiply';
        } else if (pressedBtn == 'operator') {
            opPressed = 'multiply';
            opDisplay.textContent = e.key;
        }
        console.log(`First Number: ${firstNum} Second Number: ${secondNum}`)
    } 
    
    if (e.key === '/') {
        if (opPressed == null && pressedBtn !== 'operator') {
            pressedBtn = 'operator';
            firstNum = display.textContent;
            opPressed = 'divide';
            opDisplay.textContent = e.key;
        } else if (pressedBtn !== 'operator') {
            secondNum = display.textContent;
            pressedBtn = 'operator';
            opDisplay.textContent = e.key;
            display.textContent = (operate(firstNum, opPressed, secondNum));
            firstNum = display.textContent;
            opPressed = 'divide';
        } else if (pressedBtn == 'operator') {
            opPressed = 'divide';
            opDisplay.textContent = e.key;
        }
        console.log(`First Number: ${firstNum} Second Number: ${secondNum}`)
    }
})

function numberSelection(number) {
    if (display.textContent == '0' || pressedBtn == 'operator' || pressedBtn == 'equals') {
        display.textContent = number;
        pressedBtn = 'number';
    } else {
        display.textContent += number;
        pressedBtn = 'number';
    }
    console.log(`First Number: ${firstNum} Second Number: ${secondNum}`)
}

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
    if (pressedBtn !== 'decimal') {
        if (display.textContent == '0' || pressedBtn == 'operator') {
            display.textContent = e.target.textContent;
            pressedBtn = 'decimal';
        } else if (display.textContent.indexOf('.') == '-1') {
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

backspace.addEventListener('click', e => {
    display.textContent = display.textContent.slice(0, -1);
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
        if (b == '0') {return alert('You cannot divide by zero.')
    } else
        result = parseFloat(a) / parseFloat(b);
    }
    if (operator == 'multiply') {
        result = parseFloat(a) * parseFloat(b);
    }
    return result;
}