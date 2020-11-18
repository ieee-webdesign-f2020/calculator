/* scripts.js */

var operator;
var ar_input1;
var ar_input2;
var selector = document.getElementsByClassName('selector');
var dropcont = document.getElementsByClassName('dropcont');
var dropbutts = document.getElementsByClassName('dropbutt');
var inputfield = document.getElementsByClassName('inputfield');
var input = document.getElementById('input');
var calculations = document.getElementsByClassName('calculations');
var outputs = document.getElementsByClassName('output');
var operators = document.getElementsByClassName('operators');
var numbers = document.getElementsByClassName('numbers');
var inputs = new Array;
var init = true;
var tempNum = "";
var inputEnabled = false;
dropcont[0].style.display = "none"

selector[0].addEventListener('click', showmenu);
document.body.addEventListener('keydown', checkkey);
for (var i = 0; i < 3; i++) {
    dropbutts[i].addEventListener('mouseover', focus);
    dropbutts[i].addEventListener('mouseleave', unfocus);
    dropbutts[i].addEventListener('click', swap);
}
for (var i = 0; i < 12; i++) {
    let clicky = document.createElement("div");
    if (i < 9) {
        clicky.innerHTML = i + 1;
    }
    else if (i === 9) {
        clicky.innerHTML = 0;
    }
    else if (i === 10) {
        clicky.innerHTML = ".";
    }
    else {
        clicky.innerHTML = "del";
    }
    clicky.className = "number";
    clicky.addEventListener('click', checkclick);
    clicky.addEventListener('mouseover', highlight);
    clicky.addEventListener('mouseout', unhighlight);
    numbers[0].append(clicky);
}

// Hides drop menu if shown. Shows drop menu if hidden.
function showmenu() {
    if (dropcont[0].style.display === "none") {
        dropcont[0].style.display = "flex";
    }
    else {
        dropcont[0].style.display = "none";
    }
}
function focus() {
    this.style.opacity = "100%";
}
function unfocus() {
    this.style.opacity = "70%";
}
function highlight() {
    this.style.color = "white";
    this.style.backgroundColor = "black";
}
function bold() {
    this.style.textShadow = "3px 3px black";
}
function unbold() {
    this.style.textShadow = "0px 0px black";
}
function unhighlight() {
    this.style.color = "black";
    this.style.backgroundColor = "white";
}
function swap() {
    showmenu();
    document.getElementsByClassName('inputfield')[0].style.display = "flex";
    document.getElementsByClassName('calculations')[0].style.display = "flex";
    document.getElementsByClassName('numbers')[0].style.display = "flex";
    document.getElementsByClassName('operators')[0].style.display = "flex";
    selector[0].innerHTML = this.id;
    input.innerHTML = "press enter or click here for result";
    input.style.opacity = "50%";
    input.style.color = "grey";
    input.style.fontSize = "25px";
    input.style.fontFamily = "Futura,Trebuchet MS,Arial,sans-serif";
    init = true;
    tempNum = "";
    inputs = [];
    while (outputs[0].firstChild) {
        outputs[0].removeChild(outputs[0].firstChild);
    }
    output("Calculations are shown here");
    while (operators[0].firstChild) {
        operators[0].removeChild(operators[0].firstChild);
    }
    if (this.id === "Arithmetic") {
        document.getElementById('A').innerHTML = "An";
        for (var i = 0; i < 4; i++) {
            let clicky = document.createElement("div");
            switch (i) {
                case 0:
                    clicky.innerHTML = '+';
                    break;
                case 1:
                    clicky.innerHTML = '-';
                    break;
                case 2:
                    clicky.innerHTML = 'x';
                    break;
                case 3:
                    clicky.innerHTML = '/';
                    break;
            }
            clicky.className = "operator";
            clicky.addEventListener('click', checkclick);
            clicky.addEventListener('mouseover', highlight);
            clicky.addEventListener('mouseout', unhighlight);
            clicky.style.width = "24.7%";
            operators[0].append(clicky);
        }
    }
    else if (this.id === "Trigonometric") {
        document.getElementById('A').innerHTML = "A";
        for (var i = 0; i < 7; i++) {
            let clicky = document.createElement("div");
            switch (i) {
                case 0:
                    clicky.innerHTML = 'sin';
                    clicky.style.width = "16.5%";
                    break;
                case 1:
                    clicky.innerHTML = 'cos';
                    clicky.style.width = "16.5%";
                    break;
                case 2:
                    clicky.innerHTML = 'tan';
                    clicky.style.width = "16.5%";
                    break;
                case 3:
                    clicky.innerHTML = 'csc';
                    clicky.style.width = "16.5%";
                    break;
                case 4:
                    clicky.innerHTML = 'sec';
                    clicky.style.width = "16.5%";
                    break;
                case 5:
                    clicky.innerHTML = 'cot';
                    clicky.style.width = "16.5%";
                    break;
                case 6:
                    clicky.innerHTML = 'rad/deg (currently rad)';
                    clicky.style.width = "99%";
                    clicky.id = "trigswap";
                    break;
            }
            clicky.className = "operator";
            clicky.addEventListener('click', checkclick);
            clicky.addEventListener('mouseover', highlight);
            clicky.addEventListener('mouseout', unhighlight);
            clicky.style.height = "25px";
            operators[0].append(clicky);
        }
    }
    else {
        document.getElementsByClassName('numbers')[0].style.display = "none";
        document.getElementsByClassName('operators')[0].style.display = "none";
    }
    inputEnabled = true;
    console.log("Input enabled");
}
function output(message) {
    let output = document.createElement("li");
    output.innerHTML = message;
    outputs[0].prepend(output);
}

function checkclick() {
    if (inputEnabled) {
        if (init) {
            input.innerHTML = "";
            input.style.opacity = "100%";
            input.style.color = "black";
            input.style.fontSize = "30px";
            input.style.fontFamily = "Futura,Trebuchet MS,Arial,sans-serif";
            init = false;
        }
        if (selector[0].innerHTML === "Arithmetic") {
            if (this.innerHTML.match(/\d/) || this.innerHTML === '.') {
                input.innerHTML += this.innerHTML;
                tempNum += this.innerHTML;
            }
            else if (this.innerHTML === "del") {
                if (tempNum.length) {
                    output("!Deleted " + tempNum);
                    input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length - tempNum.length);
                    tempNum = "";
                }
                else if (inputs.length) {
                    input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length - 1);
                    output("!Deleted operator " + inputs.pop());
                    tempNum = inputs.pop();
                }
            }
            else if (this.innerHTML.match(/[-x\/\+]/)) {
                if (tempNum.length) {
                    input.innerHTML += this.innerHTML;
                    inputs.push(tempNum);
                    inputs.push(this.innerHTML);
                    tempNum = "";
                }
                else {
                    output("!Expecting number");
                }
            }
        }
    }
}
function checkkey(event) {
    if (inputEnabled) {
        if (init) {
            input.innerHTML = "";
            input.style.opacity = "100%";
            input.style.color = "black";
            input.style.fontSize = "30px";
            input.style.fontFamily = "Futura,Trebuchet MS,Arial,sans-serif";
            init = false;
        }
        if (selector[0].innerHTML === "Arithmetic") {
            if (event.key.match(/\d/) || event.key === '.') {
                input.innerHTML += event.key;
                tempNum += event.key;
            }
            else if (event.key === "Shift") {}
            else if (event.key.match(/[-x\/\+]/)) {
                if (tempNum.length > 0) {
                    input.innerHTML += event.key;
                    inputs.push(tempNum);
                    inputs.push(event.key);
                    tempNum = "";
                }
                else {
                    output("!Expecting number");
                }
            }
            else if (event.key === '*') {
                if (tempNum.length) {
                    input.innerHTML += 'x';
                    inputs.push(tempNum);
                    inputs.push('x');
                    tempNum = "";
                }
                else {
                    output("!Expecting number");
                }
            }
            else if (event.key === "Backspace") {
                if (tempNum.length) {
                    output("!Deleted " + tempNum);
                    input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length - tempNum.length);
                    tempNum = "";
                }
                else if (inputs.length) {
                    input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length - 1);
                    output("!Deleted operator " + inputs.pop());
                    tempNum = inputs.pop();
                }
            }
            else if (event.key === "Enter") {
                if (inputs.length === 0) {
                    output("!Nothing entered");
                }
                else if (tempNum.length === 0) {
                    output("!Expecting number");
                }
                else {
                    let entered = "User entered: ";
                    inputs.push(tempNum);
                    tempNum = "";
                    for (let i = 0; i < inputs.length; i++) {
                        entered += inputs[i];
                    }
                    output(entered);
                    console.log(inputs);
                    console.log(tempNum);
                }
            }
        }
        else if (selector[0].innerHTML === "Trigonometric") {

        }
    }
}

function enter(event) {
    inputfield[0].style.opacity = "100%";
    inputfield[0].style.color = "black";
    inputfield[0].style.fontSize = "30px";
    inputfield[0].style.fontFamily = "Futura,Trebuchet MS,Arial,sans-serif";
    if (tempNum.length > 0) {
        inputs.push(tempNum);
        tempNum = "";
    }
    if (inputs.length === 0) {
        output("!Nothing entered");
    }
    else if (event.key !== "Enter") {
        output("!Invalid keypress");
    }
    else {
        if (!Number.isInteger(parseInt(inputs[inputs.length - 1]))) {
            output("Expecting number");
        }
        else {
            output(inputs);
            let inputsTemp = new Array;
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i] === "x") {
                    inputs[i + 1] = parseFloat(inputs[i - 1]) * parseFloat(inputs[i + 1]);
                    inputs[i - 1] = '$';
                    inputs[i] = '$';
                    output(inputs);
                }
                if (inputs[i] === "/") {
                    inputs[i + 1] = parseFloat(inputs[i - 1]) / parseFloat(inputs[i + 1]);
                    inputs[i - 1] = '$';
                    inputs[i] = '$';
                    output(inputs);
                }
            }
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i] !== '$') {
                    inputsTemp.push(inputs[i]);
                }
            }
            console.log(inputsTemp)
            for (let i = 0; i < inputsTemp.length; i++) {
                if (inputsTemp[i] === "+") {
                    inputsTemp[i + 1] = parseFloat(inputsTemp[i - 1]) + parseFloat(inputsTemp[i + 1]);
                    inputsTemp[i - 1] = '$';
                    inputsTemp[i] = '$';
                    output(inputsTemp);
                }
                if (inputsTemp[i] === "-") {
                    inputsTemp[i + 1] = parseFloat(inputsTemp[i - 1]) - parseFloat(inputsTemp[i + 1]);
                    inputsTemp[i - 1] = '$';
                    inputsTemp[i] = '$';
                    output(inputsTemp);
                }
            }
            for (let i = 0; i < inputsTemp.length; i++) {
                if (inputsTemp[i] !== '$') {
                    let resetButt = document.createElement("h1");
                    resetButt.id = "reset";
                    resetButt.innerHTML = "Click here to reset";
                    resetButt.addEventListener('mouseover', bold);
                    resetButt.addEventListener('mouseleave', unbold);
                    outputs[0].prepend(resetButt)
                    inputfield[0].innerHTML = "Your answer is: " + inputsTemp[i];
                }
            }
        }
    }
}

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


function trig() {
}

function bitwise() {
}

