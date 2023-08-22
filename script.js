// Operation buttons
let canUseFirstValue = true;
let canUseSecondValue = false;
let firstValue = "";
let storedOperator = null;


function adition (a,b) {
    const result = parseInt(a) + parseInt(b);
    displayElement.textContent = result;
    displayValue = "";
    displaySecondValue = "";
}

function subtraction(a,b) {
    const result = a - b;
    displayElement.textContent = result;
    displayValue = "";
    displaySecondValue = "";
}

function multiplication(a,b) {
    const result = a * b;
    displayElement.textContent = result;
    displayValue = ""; 
    displaySecondValue = "";
}

function division (a,b) {
    if (b === 0) {
        displayElement.textContent = "Infinite!";
    }
    const result = a / b;
    displayElement.textContent = parseFloat(result.toFixed(5));
    displayValue = "";
    displaySecondValue = "";
}

function operate(firstValue, operator, secondValue) {
    if (firstValue === "" && secondValue !== "") {
        firstValue = parseFloat(secondValue);
    }
    if (operator === adition) {
        adition(firstValue, secondValue);
    } else if (operator === subtraction) {
        subtraction(firstValue, secondValue);
    } else if (operator === multiplication) {
        multiplication(firstValue, secondValue);
    } else if (operator === division) {
        division(firstValue, secondValue);
    }
    
    // Return the result here
    return displayElement.textContent;
}


// Display in general

let displayValue = "";
let displaySecondValue = "";

function deleteEverything() {
    displayElement.textContent = "";
    displayValue = "";
    displaySecondValue = "";
    firstValue = "";
    canUseFirstValue = true;
    canUseSecondValue = false;
}

function updateDisplay(value) {
    displayElement.textContent = value; 
}

function setOperatorAndState(operatorFunc) {
    if (displaySecondValue !== ""){
        if (storedOperator !== null) {
            firstValue = operate(firstValue, storedOperator, displaySecondValue);
        } else {
            firstValue = displayValue;
        }
        displayValue = firstValue
    }
    operatorSelected = operatorFunc;
    canUseFirstValue = false;
    canUseSecondValue = true;
    storedOperator = operatorSelected; 
}

const numberButton = document.querySelectorAll('.number');
numberButton.forEach(button => {
    button.addEventListener('click', () => {
        if (canUseFirstValue === true) {
            displayValue += button.id;
            updateDisplay(displayValue);
        } else if (canUseSecondValue === true){
            displaySecondValue += button.id;
            updateDisplay(displaySecondValue);
        }
    });
});

// Most of the variables

let operatorSelected = "";

const displayElement = document.getElementById('output');

plus.addEventListener('click', () => setOperatorAndState(adition));
minus.addEventListener('click', () => setOperatorAndState(subtraction));
multiply.addEventListener('click', () => setOperatorAndState(multiplication));
divide.addEventListener('click', () => setOperatorAndState(division));

const equals = document.getElementById('equals');
equals.addEventListener('click', () => operate(displayValue,operatorSelected,displaySecondValue));

const deleteButton = document.getElementById('delete');
deleteButton.addEventListener("click", () => deleteEverything());
