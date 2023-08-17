// Operation buttons
let canUseFirstValue = true;
let canUseSecondValue = false;


function adition (a,b) {
    displayElement.textContent = parseInt(a) + parseInt(b);
    displayValue = ""; 
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
    if (b === 0) {
        displayElement.textContent = "Infinite!";
    }
    const result = a / b;
    displayElement.textContent = parseFloat(result.toFixed(2));
    displayValue = ""; 
    return parseFloat(result.toFixed(2));
}

function operate(firstValue, operator, secondValue) {
    return operator(firstValue, secondValue)
}

// Display in general

let displayValue = "";
let displaySecondValue = "";

function deleteEverything() {
    displayElement.textContent = "";
    displayValue = "";
    displaySecondValue = "";
    canUseFirstValue = true;
    canUseSecondValue = false;
}

function updateDisplay(value) {
    displayElement.textContent = value; 
}

function sumOperator() {
    operatorSelected = adition;
    canUseFirstValue = false;
    canUseSecondValue = true;
}

function subtractionOperator() {
    operatorSelected = subtraction;
    canUseFirstValue = false;
    canUseSecondValue = true;
}

function multiplicationOperator() {
    operatorSelected = multiplication;
    canUseFirstValue = false;
    canUseSecondValue = true;
}

function divisionOperator() {
    operatorSelected = division;
    canUseFirstValue = false;
    canUseSecondValue = true;
}

const numberButton = document.querySelectorAll('.number');
numberButton.forEach(button => {
    button.addEventListener('click', () => {
        if (canUseFirstValue === true) {
            displayValue += button.id;
            updateDisplay(displayValue);
            console.log('first')
        } else if (canUseSecondValue === true){
            displaySecondValue += button.id;
            updateDisplay(displaySecondValue)
            console.log('second');
        }
    });
});

// Most of the variables

let operatorSelected = "";

const displayElement = document.getElementById('output');

const plus = document.getElementById('plus'); //I don't like this method where theres a EventListener for each operator, but this is what I got for now
plus.addEventListener('click', () => sumOperator())

const minus = document.getElementById('minus');
minus.addEventListener('click', () => subtractionOperator())

const multiply = document.getElementById('multiply');
multiply.addEventListener('click', () => multiplicationOperator())

const divide = document.getElementById('divide');
divide.addEventListener('click', () => divisionOperator())

const equals = document.getElementById('equals');
equals.addEventListener('click', () => operate(displayValue,operatorSelected,displaySecondValue));

const deleteButton = document.getElementById('delete');
deleteButton.addEventListener("click", () => deleteEverything());

/*Notes:
Hardest part by far, making the equals work with a second input/value.

Primero hay que hacer que el operator sea modificable con cada button de los operadores. //De momento funciona
Segundo hay que crear otro displayValue (quizás displaySecondValue) que se active una vez el operador haya sido clickeado,
quitando a su vez displayElement.textContent = 0 y pasando como parámetro displaySecondValue. Ahora bien, como se puede lograr eso? 

Se me ocurre utilizar otro getElement o querySelector y añadir quizás otra clase, probar con un console.log()

Quizás lo mejor sea hacer una funcion que tome como valores  */