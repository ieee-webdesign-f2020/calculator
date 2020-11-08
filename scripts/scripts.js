/* scripts.js */

function arithmetic() {
    input1 = document.getElementById("ar_input1");
    input2 = document.getElementById("ar_input2");
    operator = document.getElementById("operator");
    switch(operator) {
        case "+":
            ar_output.innerHTML = parseInt(input1) + parseInt(input2);
            break;
        case "-":
            ar_output.innerHTML = parseInt(input1) - parseInt(input2);
            break; 
        case "*":
            ar_output.innerHTML = parseInt(input1) * parseInt(input2);
            break;
        case "/":
            ar_output.innerHTML = parseInt(input1) / parseInt(input2);
            break;
        case "%":
            ar_output.innerHTML = parseInt(input1) % parseInt(input2);
            break;
        default:
            ar_output.innerHTML = 0;
    }
}

function trig() {
}

function bitwise() {
}

