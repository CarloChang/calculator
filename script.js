function adition (a,b) {
    displayElement.textContent = parseInt(a) + parseInt(b);
    displayValue = ""; 
    return a + b;
}

function subtraction(a,b) {
    displayElement.textContent = a - b;
    displayValue = ""; 
    return a - b;
}

function multiplication(a,b) {
    displayElement.textContent = a * b;
    displayValue = ""; 
    return a * b;
    
}

function division (a,b) {
    const result = a / b;
    displayElement.textContent = parseFloat(result.toFixed(2));
    displayValue = ""; 
    return parseFloat(result.toFixed(2));
}

function operate(firstValue, operator, secondValue) {
   return operator(firstValue, secondValue)
}

let displayValue = "";

function deleteEverything() {
    displayElement.textContent = "";
    displayValue = ""; 
}

function updateDisplay(value) {
    displayElement.textContent = value; 
}

const numberButton = document.querySelectorAll('.number');
numberButton.forEach(button => {
    button.addEventListener('click', () => {
        displayValue += button.id;
        updateDisplay(displayValue);
    });
});



const displayElement = document.getElementById('output');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');
const deleteButton = document.getElementById('delete');
deleteButton.addEventListener("click", () => deleteEverything());
equals.addEventListener('click', () => operate(displayValue,subtraction,3));

const buttons = document.querySelectorAll('button');
buttons.addEventListener('animationend');





