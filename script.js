var body = document.getElementById('backgroundGradient');
var h3 = document.querySelector('h3');
var color_1 = document.querySelector('.color1');
var color_2 = document.querySelector('.color2');
var random = document.querySelector('.random');

// Function for random generate numbers 0 to 255
function randomGenerator() {
    return Math.round(Math.random() * 255);
}

//Function that converts numbers to a strings base 16
function rgbToHex() {
    var hex = randomGenerator().toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

// Function that combines 3 hex to form random colors.
function randomColors() {
    var randomColor = "#" + rgbToHex() + rgbToHex() + rgbToHex();
    return randomColor;
}

// Function setGradient color to the page
function setGradient() {
    body.style.background =
        "linear-gradient(to right," +
        color_1.value +
        "," +
        color_2.value +
        ")";

    h3.textContent = body.style.background + ',';
}

setGradient();

// Function for random color
function randomColorGradient(){
    color_1.value = randomColors();
    color_2.value = randomColors();
    setGradient();
}

color_1.addEventListener('click',setGradient);
color_2.addEventListener('click',setGradient);
random.addEventListener('click', randomColorGradient);