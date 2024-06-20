let currentNumber = '';
let previousNumber = '';
let operation = null;
let isResultDisplayed = false;

function addToDisplay(val) {
    if (isResultDisplayed) {
        currentNumber = val.toString();
        console.log("addToDisplay: SONO NELL'IF");
        isResultDisplayed = false;
    } else {
        currentNumber += val.toString();
        console.log("addToDisplay: SONO NELL'ELSE");
    }
    document.getElementById("result").value = currentNumber;
}

function setOperation(op) {
    if (currentNumber == '') return;
    if (previousNumber != '') {
        solve();
        console.log("setOperation: SONO NELL'IF 2");
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
    document.getElementById("result").value = operation;
}

function solve() {
    if (currentNumber == '' || previousNumber == '' || operation == null) return;
    let result;
    try {
        result = math.evaluate(`${previousNumber} ${operation} ${currentNumber}`);
    } catch (error) {
        result = 'Error';
    }
    document.getElementById("result").value = result;
    previousNumber = '';
    currentNumber = result.toString();
    operation = null;
    isResultDisplayed = true;
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    isResultDisplayed = false;
    document.getElementById("result").value = '';
}
