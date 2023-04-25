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
    if (b === 0) {
        return "OOOPSS!";
    } else {
        return a / b;
    }
}

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

let n1 = 0;
let n2 = 0;
let op = "";

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const display = document.querySelector('.display');
const operation = document.querySelector('.operation');
const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

one.addEventListener('click', () => {
    display.textContent += 1;
});
two.addEventListener('click', () => {
    display.textContent += 2;
});
three.addEventListener('click', () => {
    display.textContent += 3;
});
four.addEventListener('click', () => {
    display.textContent += 4;
});
five.addEventListener('click', () => {
    display.textContent += 5;
});
six.addEventListener('click', () => {
    display.textContent += 6;
});
seven.addEventListener('click', () => {
    display.textContent += 7;
});
eight.addEventListener('click', () => {
    display.textContent += 8;
});
nine.addEventListener('click', () => {
    display.textContent += 9;
});
zero.addEventListener('click', () => {
    display.textContent += 0;
});


addition.addEventListener('click', () => {
    
    if (op === "+" || op === "-" || op === "*" || op === "/") {
        n2 = Number(display.textContent);
        display.textContent = operate(op, n1, n2);
        operation.textContent = "";
    }
    
    n1 = Number(display.textContent);
    display.textContent = "";
    op = "+";
    operation.textContent = `${n1} ${op}`;
    
});

subtraction.addEventListener('click', () => {
    
    if (op === "+" || op === "-" || op === "*" || op === "/") {
        n2 = Number(display.textContent);
        display.textContent = operate(op, n1, n2);
        operation.textContent = "";
    }
    
    n1 = Number(display.textContent);
    display.textContent = "";
    op = "-";
    operation.textContent = `${n1} ${op}`;

});

multiplication.addEventListener('click', () => {
    
    if (op === "+" || op === "-" || op === "*" || op === "/") {
        n2 = Number(display.textContent);
        display.textContent = operate(op, n1, n2);
        operation.textContent = "";
    }
    
    n1 = Number(display.textContent);
    display.textContent = "";
    op = "*";
    operation.textContent = `${n1} ${op}`;

});

division.addEventListener('click', () => {
    
    if (op === "+" || op === "-" || op === "*" || op === "/") {
        n2 = Number(display.textContent);
        display.textContent = operate(op, n1, n2);
        operation.textContent = "";
    }
    
    n1 = Number(display.textContent);
    display.textContent = "";
    op = "/";
    operation.textContent = `${n1} ${op}`;

});

equal.addEventListener('click', () => {
    n2 = Number(display.textContent);
    display.textContent = operate(op, n1, n2);
    operation.textContent = "";
});

clear.addEventListener('click', () => {
    n1 = 0;
    n2 = 0;
    op = "";
    display.textContent = "";
    operation.textContent = "";
});