const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.display');
const opDisplay = calculator.querySelector('.op-display')
const buttons = calculator.querySelector('.buttons');
const numbers = buttons.querySelectorAll('.numbers');


buttons.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const btn = e.target;
        const action = btn.dataset.action;
        const btnContent = btn.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        //displays number & resets display if previous key operator or calculate
        if (!action) {
            calculator.dataset.previousKeyType = 'number';
            if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = btnContent;
            } else {
                display.textContent = displayedNum + btnContent;
            }
        }

        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            } else if (previousKeyType === 'operator') {
            display.textContent = '0.'
            } 
            calculator.dataset.previousKeyType = 'decimal';
        }

        if (action == 'add' || action == 'subtract' || action == 'multiply' || action == 'divide') {
            calculator.dataset.previousKeyType = 'operator';
            // sets dataset of operator to the operator key pressed so that it can be plugged into operate function
            calculator.dataset.operator = action;
            // displays operator 
            opDisplay.textContent = btnContent;
            // sets dataset of firstValue to displayedNum
            calculator.dataset.firstValue = displayedNum;
        }

        if (action === 'calculate') {
            calculator.dataset.previousKeyType = 'calculate';
            const firstValue = calculator.dataset.firstValue;
            // sets secondValue to displayedNum
            const secondValue = displayedNum;
            console.log(`First Value: ${firstValue} Second Value: ${secondValue}`);
            const operator = calculator.dataset.operator;
            
            display.textContent = operate(firstValue, operator, secondValue);
        }

        if (action === 'clear') {
            display.textContent = '0';
            firstValue = '0';
            secondValue = '0';
            opDisplay.textContent = '';
            console.log(`First Value: ${firstValue} Second Value: ${secondValue}`);
        }
    }
});

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