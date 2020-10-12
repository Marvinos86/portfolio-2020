var passwordElement = document.getElementById("password-screen");
var lengthElement = document.getElementById("lengte");
var capitalElement = document.getElementById("hoofdletters");
var smallElement = document.getElementById("kleineletters");
var integersElement = document.getElementById("cijfers");
var symbolsElement = document.getElementById("symbolen");
var generateElement = document.getElementById("generate");

var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+=";

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    var len = lengthElement.value;
    var password = "";
    if (capitalElement.checked) {
        password += getUppercase();
    }
    if (smallElement.checked) {
        password += getLowercase();
    }
    if (integersElement.checked) {
        password += getNumber();
    }
    if (symbolsElement.checked) {
        password += getSymbol();
    }
    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }
    passwordElement.innerText = password;
}

function generateX() {
    var xs = [];
    if (capitalElement.checked) {
        xs.push(getUppercase());
    }
    if (smallElement.checked) {
        xs.push(getLowercase());
    }
    if (integersElement.checked) {
        xs.push(getNumber());
    }
    if (symbolsElement.checked) {
        xs.push(getSymbol());
    }
    if (xs.length === 0) return "";
    return xs[Math.floor(Math.random() * xs.length)];
}

generateElement.addEventListener("click", generatePassword);
