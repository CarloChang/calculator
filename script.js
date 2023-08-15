function adition (a,b) {
    return a + b;
}

function subtraction(a,b) {
    return a - b;
}

function multiplication(a,b) {
    return a * b;
}

function division (a,b) {
    const result = a / b
    return parseFloat(result.toFixed(2));
}

function operate(firstValue, operator, secondValue) {
   return operator(firstValue, secondValue)
}

function test(e){
    one.addEventListener('click')
}

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('one');
const deleteButton = document.getElementById('delete');

console.log(operate(1,division,4))
console.log(division(10,3))