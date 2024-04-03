function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a, b, o){
    switch(o){
        case "+":
        return add(a,b);

        case "-":
        return subtract(a,b);

        case "x":
        return multiply(a,b);

        case "/":
        return divide(a,b);

        default:
            console.log("wrong operator, only use one of:  + - x /");
    }
}

let numbers = Array.from(document.querySelectorAll(".number"));
let operators = Array.from(document.querySelectorAll(".operator"));
let screen = document.querySelector(".screen");

let operation = {
    a: "",
    b: "",
    o: "",
    done: 0,
}

numbers.forEach(e => {
    e.addEventListener("click", (x)=>{
        if(operation.done == 1){
            screen.innerText = "";
            operation.done = 0;
        }
        if(operation.o === ""){
            operation.a+=x.target.innerText
        } else {
            operation.b+=x.target.innerText
        }
        screen.innerText += x.target.innerText;
        console.log(`clicked: ${x.target.innerText}`)
    })
})



operators.forEach(e => {
    e.addEventListener("click", (x)=>{
        

        if(x.target.innerText == "CL"){
            operation.a = "";
            operation.b = "";
            operation.o = "";
            operation.done = 0;
            screen.innerText = "";
            return
        }
        if(x.target.innerText == "="){
            if(operation.a != "" && operation.b != "" && operation.o != ""){
                screen.innerText = operate(Number(operation.a), Number(operation.b), operation.o);
                operation.a = "";
                operation.b = "";
                operation.o = "";
                operation.done = 1;
                return
            }
            return
        }
        if(operation.o != ""){
            return;
        }
        operation.o += x.target.innerText;
        screen.innerText += x.target.innerText;
    })
})