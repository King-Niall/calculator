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
        backinputsNum.push(e.innerHTML);
        topscreen.innerHTML += e.innerHTML;
        bottomscreen.innerHTML = e.innerHTML;
    });
})

Array.from(operationButtons).forEach((e) => {
    e.addEventListener("click", () => operation(e));
});

equalsButton.addEventListener("click", function() {
    backinputsNum.push(newv = (bottomscreen.innerHTML = execute(backinputsNum,backinputsOperators)));
    topscreen.innerHTML = newv;

});

function operation(e){
    backinputsOperators.push(e.innerHTML);
    topscreen.innerHTML += e.innerHTML;
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