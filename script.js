// { calculate } import './calculator';

// TODO: Faire la manipulation du DOM dans ce fichier

const buttonsObject = [...document.querySelectorAll("button")];
const buttons = buttonsObject.map(button => button.textContent);
const display = document.getElementById("calcul");
const dot = document.querySelector(".dot");
const input = document.getElementById("input");
let displayArray = [];
const backEndOperation = [];
let backEndOperationJoin;
let displayArrayJoin;

plus.addEventListener("click", e => e.preventDefault());
minus.addEventListener("click", e => e.preventDefault());
times.addEventListener("click", e => e.preventDefault());
divideby.addEventListener("click", e => e.preventDefault());
equals.addEventListener("click", e => e.preventDefault());
percentage.addEventListener("click", e => e.preventDefault());

function clickBtn(btn) {
    btn.addEventListener("click", (e) => {
        const value = e.target.textContent;
        operation(value);
    })
}

buttonsObject.forEach(b => clickBtn(b));

function operation(value) {
    switch (value) {
        case "CA":
            clear()
            break;
        case "C":
            del(value);
            break;
        case "=":
            const result = eval(backEndOperationJoin);
            display.textContent = result;
            input.value = result;
        default:

            if (value === "×") {
                value = "*";
            } else if (value === "÷") {
                value = "/";
            } else {
                value = value;
            }
            backEndOperation.push(value);
            backEndOperationJoin = backEndOperation.join('');
            console.log(backEndOperation);
            console.log(backEndOperationJoin);
            if (value === "*") {
                value = "×";
            } else if (value === "/") {
                value = "÷";
            } else {
                value = value;
            }
            displayArray.push(value)
            displayArrayJoin = displayArray.join('');
            input.value += ` ${value} `;
            console.log(displayArray);
            console.log(displayArrayJoin);
            switch (value) {
                case "+":
                    display.textContent = `${displayArrayJoin}`;
                    input.value = "";
                    break;
                case "×":
                    display.textContent = `${displayArrayJoin}`;
                    input.value = "";
                case "÷":
                    display.textContent = `${displayArrayJoin}`;
                    input.value = "";
                    break;
                case "-":
                    display.textContent = `${displayArrayJoin}`;
                    input.value = "";
                    break;
            }
            if(input.value.includes(".")) {
                
            }   
            break;
    }
}

function clear() {
    input.value = "";
    display.textContent = "";
}

function del(value) {
    if (value === "C") {
        displayArray.pop();
        console.log(displayArray);
        input.value = displayArray.join(' ');
    }
}