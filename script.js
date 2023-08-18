// Operation buttons
let canUseFirstValue = true;
let canUseSecondValue = false;


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
    if (displayValue === "" && displaySecondValue === ""){
        return;
    }
    canUseFirstValue = true;
    canUseSecondValue = false;
    console.log(displayValue,displaySecondValue);
    return operator(firstValue, secondValue);
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

function setOperatorAndState(operatorFunc) {
    if (displaySecondValue !== ""){
        console.log('test')
    }
    operatorSelected = operatorFunc;
    canUseFirstValue = false;
    canUseSecondValue = true;
}

const numberButton = document.querySelectorAll('.number');
numberButton.forEach(button => {
    button.addEventListener('click', () => {
        if (canUseFirstValue === true) {
            displayValue += button.id;
            updateDisplay(displayValue);
            console.log(displayValue, 'first')
        } else if (canUseSecondValue === true){
            displaySecondValue += button.id;
            updateDisplay(displaySecondValue)
            console.log(displaySecondValue,'second');
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

/*Notes:
Hardest part by far, making the equals work with a second input/value.

Primero hay que hacer que el operator sea modificable con cada button de los operadores. //De momento funciona
Segundo hay que crear otro displayValue (quizás displaySecondValue) que se active una vez el operador haya sido clickeado,
quitando a su vez displayElement.textContent = "" y pasando como parámetro displaySecondValue. Ahora bien, como se puede lograr eso? 

Se me ocurre utilizar otro getElement o querySelector y añadir quizás otra clase, probar con un console.log()

Quizás lo mejor sea hacer una funcion que tome como valores 

La calculadora le falta dos pasos, primero: que cuando presione igual, y luego le de a un operador y después a un número, utilice el resultado previo
como primer valor (displayValue)

Segundo: que si se llega a presionar otro número después de presionar el igual, este resetea todo. //De momento funciona*/