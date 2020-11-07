/* scripts.js */

let altImage = false;

function change_calculator_img() {
    let calc = document.getElementById("calculator");   
    if (altImage) {
        calc.src = "media/calc.jpg";
        altImage = false;
    }
    else {
        calc.src = "media/calc2.jpg";
        altImage = true;
    }
}

