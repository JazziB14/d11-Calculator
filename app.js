function display(param) {

    // go to the input/output box and add the parameter to it
    // without clearing the existing value in it by using += vs. just =
    document.getElementById('output').value += param;
}

function clearScreen() {

    // go to the input/output box, set it to empty thus clearing it
    document.getElementById('output').value = '';
}

function solve() {
    
    // grab the expression/value in the input box and assign it variable X
    var x = document.getElementById('output').value;

    // solve the expression and assign it variable Y
    // "eval" should not be used due to security reasons in production
    var y = eval(x);
    

    // display Y in the input/output box
    document.getElementById('output').value = y;
}

// Go to clear button, add a click event listener, to call the clearScreen function
document.getElementById('btnClear').addEventListener('click', 
clearScreen);

// Go to solve button, add a click event listener, to call the solve function
document.getElementById('btnSolve').addEventListener('click', 
solve);

// Go to btn1, add a click event listener, to call the btnOne function
document.getElementById("btn1").addEventListener('click',
function btnOne () {
    display('1');

    }
);

// Go to btn2, add a click event listener, to call the display function with parameter
document.getElementById("btn2").addEventListener('click',
function () {
    display('2');

    }
);

// Go to btn3, add a click event listener, to call the display function with parameter
document.getElementById("btn3").addEventListener('click',
    () => {
    display('3');
     
    }
);

// Go to btn4, add a click event listener, to call the display function with parameter
document.getElementById("btn4").addEventListener('click',() => {display('4'); });

// Go to btn5, add a click event listener, to call the display function with parameter
var btn5 = document.getElementById('btn5');
btn5.addEventListener('click', () => {display('5');});

// Go to btn6, add a click event listener, to call the display function with parameter
var btn6 = document.getElementById('btn6');
btn6.addEventListener('click', () => {display('6');});

// Go to btn7, add a click event listener, to call the display function with parameter
var btn7 = document.getElementById('btn7');
btn7.addEventListener('click', () => {display('7');});

// Go to btn8, add a click event listener, to call the display function with parameter
var btn8 = document.getElementById('btn8');
btn8.addEventListener('click', () => {display('8');});

// Go to btn9, add a click event listener, to call the display function with parameter
var btn9 = document.getElementById('btn9');
btn9.addEventListener('click', () => {display('9');});

// Go to btn0, add a click event listener, to call the display function with parameter
var btn0 = document.getElementById('btn0');
btn0.addEventListener('click', () => {display('0');});

// Go to btnDot, add a click event listener, to call the display function with parameter
var btnDot = document.getElementById('btnDot');
btnDot.addEventListener('click', () => {display('.');});

// Go to btnDivide, add a click event listener, to call the display function with parameter
var btnDivide = document.getElementById('btnDivide');
btnDivide.addEventListener('click', () => {display('/');});

// Go to btnMultiply, add a click event listener, to call the display function with parameter
var btnMultiply = document.getElementById('btnMultiply');
btnMultiply.addEventListener('click', () => {display('*');});

// Go to btnMinus, add a click event listener, to call the display function with parameter
var btnMinus = document.getElementById('btnMinus');
btnMinus.addEventListener('click', () => {display('-');});

// Go to btnAdd, add a click event listener, to call the display function with parameter
var btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click', () => {display('+');});