const bottomscreen = document.getElementById("bottom");
const topscreen = document.getElementById("top");
const numberButtons = document.getElementsByClassName("number");
const equalsButton = document.getElementById("equal");
const decimalButton = document.getElementById("decimal");
const operationButtons = document.getElementsByClassName("operation");

topscreen.addEventListener("click", () => {
    console.log(backinputsNum);
    console.log(inputs);
});

let backinputsNum = new Array();
let backinputsOperators = new Array();
let inputsDisplay = "";
let inputs = "";

Array.from(numberButtons).forEach((e) => {
    e.addEventListener("click", function() {
        inputs += e.innerHTML;
        bottomscreen.innerHTML = inputs;
        console.log(backinputsNum);
        console.log(backinputsOperators);
    });
})

Array.from(operationButtons).forEach((e) => {
    e.addEventListener("click", () => operation(e));
});

let trigger = false;

equalsButton.addEventListener("click", function() {
    backinputsNum.push(inputs);
    inputsDisplay += inputs;
    inputs = "";

    
    backinputsNum.push(newv = (bottomscreen.innerHTML = execute(backinputsNum,backinputsOperators)));
    topscreen.innerHTML = newv;
    trigger = true;
});


function operation(e){
    if (!trigger){
        backinputsNum.push(inputs);
        inputsDisplay += inputs;
    }
    inputsDisplay += e.innerHTML;
    inputs = "";

    backinputsOperators.push(e.innerHTML);

    topscreen.innerHTML = inputsDisplay;
    bottomscreen.innerHTML = "";
    
}

function execute(arrN, arrO){
    arrNum = arrN.reverse();
    arrOperators = arrO.reverse();
    let total = parseFloat(arrNum.pop());
    while (arrOperators.length > 0) {
        let operator = arrOperators.pop();

        switch (operator) {
            case "+":
                total += parseFloat(arrNum.pop());
                break;

            case "-":
                total -= parseFloat(arrNum.pop());
                break;

            case "*":
                total *= parseFloat(arrNum.pop());
                break;

            case "/":
                total /= parseFloat(arrNum.pop());
                break;
        }

    }
    return total;
}