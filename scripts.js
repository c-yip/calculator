

// calculator
const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.display');
const opDisplay = calculator.querySelector('.op-display')
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
        const previousKeyType = calculator.dataset.previousKeyType;
        let firstValue =  calculator.dataset.firstValue;
        let secondValue;

        //displays number
        if (!action) {
            calculator.dataset.previousKeyType = 'number';
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = btnContent;
            } else {
                display.textContent = displayedNum + btnContent;
            }
        }

        if (action === 'decimal') {
            calculator.dataset.previousKeyType = 'decimal';
            display.textContent = displayedNum + '.';
        }

        if (action == 'add' || action == 'subtract' || action == 'multiply' || action == 'divide') {
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.operator = action;
            opDisplay.textContent = btnContent;
            calculator.dataset.firstValue = displayedNum;
        }

        if (action === 'calculate') {
            secondValue = displayedNum;
            console.log('first value ' + firstValue)
            console.log('second value ' + secondValue);
            const operator = calculator.dataset.operator;
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
            display.textContent = operate(firstValue, operator, secondValue);
        }
    }
});