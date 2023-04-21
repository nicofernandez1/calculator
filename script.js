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

let n1;
let n2;
let op;

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

const display = document.getElementById('display');
const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

one.addEventListener('click', () => {
    display.textContent += 1;
})
two.addEventListener('click', () => {
    display.textContent += 2;
})
three.addEventListener('click', () => {
    display.textContent += 3;
})
four.addEventListener('click', () => {
    display.textContent += 4;
})
five.addEventListener('click', () => {
    display.textContent += 5;
})
six.addEventListener('click', () => {
    display.textContent += 6;
})
seven.addEventListener('click', () => {
    display.textContent += 7;
})
eight.addEventListener('click', () => {
    display.textContent += 8;
})
nine.addEventListener('click', () => {
    display.textContent += 9;
})
zero.addEventListener('click', () => {
    display.textContent += 0;
})


addition.addEventListener('click', () => {
    n1 = Number(display.textContent);
    console.log(n1);
    display.textContent = "";
    op = "+";
})
subtraction.addEventListener('click', () => {
    n1 = Number(display.textContent);
    console.log(n1);
    display.textContent = "";
    op = "-";
})
multiplication.addEventListener('click', () => {
    n1 = Number(display.textContent);
    console.log(n1);
    display.textContent = "";
    op = "*";
})
division.addEventListener('click', () => {
    n1 = Number(display.textContent);
    console.log(n1);
    display.textContent = "";
    op = "/";
})

equal.addEventListener('click', () => {
    n2 = Number(display.textContent);
    console.log(n2);
    display.textContent = operate(op, n1, n2);
})

clear.addEventListener('click', () => {
    n1 = 0;
    n2 = 0;
    op = "";
    display.textContent = "";
})