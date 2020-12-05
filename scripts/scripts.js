/* scripts.js */

var operator;
var ar_input1;
var ar_input2;

/* ARITHMETIC */

function add() {
    operator = 0;
    arithmetic();
}


function sub() {
    operator = 1;
    arithmetic();
}

function mult() {
    operator = 2;
    arithmetic();
}

function div() {
    operator = 3;
    arithmetic();
}

function mod() {
    operator = 4;
    arithmetic();
}

function arithmetic() {
    ar_input1 = document.getElementById("ar_input1");
    ar_input2 = document.getElementById("ar_input2");
    ar_output = document.getElementById("ar_output");
    switch(operator) {
    case 0:
        ar_output.innerHTML = parseInt(ar_input1.value) + parseInt(ar_input2.value);
        break;
    case 1:
        ar_output.innerHTML = parseInt(ar_input1.value) - parseInt(ar_input2.value);
        break; 
    case 2:
        ar_output.innerHTML = parseInt(ar_input1.value) * parseInt(ar_input2.value);
        break;
    case 3:
        ar_output.innerHTML = parseInt(ar_input1.value) / parseInt(ar_input2.value);
        break;
    case 4:
        ar_output.innerHTML = parseInt(ar_input1.value) % parseInt(ar_input2.value);
        break;
    default:
        ar_output.innerHTML = 0;
    }
}

/* TRIG */

function trig() {
    tr_input1 = document.getElementById("tr_input1");
    tr_output = document.getElementById("tr_output");
    switch(operator) {
        case "sin":
            tr_output.innerHTML = Math.sin(tr_input1.value);
            break;
        case "cos":
            tr_output.innerHTML = Math.cos(tr_input1.value);
            break;
        case "tan":
            tr_output.innerHTML = Math.tan(tr_input1.value);
            break;
        case "asin":
            tr_output.innerHTML = Math.asin(tr_input1.value);
            break;
        case "acos":
            tr_output.innerHTML = Math.acos(tr_input1.value);
            break;
        case "atan":
            tr_output.innerHTML = Math.atan(tr_input1.value);
            break;
        default:
            ar_output.innerHTML = 0;
}

/* BITWISE */

function bitwise() {
}

