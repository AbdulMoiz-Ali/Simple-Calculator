// // Function to add two numbers
// function add(a, b) {
//     return a + b;
// }

// // Function to subtract two numbers
// function subtract(a, b) {
//     return a - b;
// }

// // Function to multiply two numbers
// function multiply(a, b) {
//     return a * b;
// }

// // Function to divide two numbers
// function divide(a, b) {
//     // Check if dividing by zero
//     if (b === 0) {
//         return "Cannot divide by zero";
//     }
//     return a / b;
// }

// // Function to operate based on operator and two numbers
// function calculate(operator, a, b) {
//     switch (operator) {
//         case '+':
//             return add(a, b);
//         case '-':
//             return subtract(a, b);
//         case '*':
//             return multiply(a, b);
//         case '/':
//             return divide(a, b);
//         default:
//             return "Invalid operator";
//     }
// }

// // Example usage:
// // let operator = prompt('operator');
// // let num1 = parseInt(prompt("num1"));
// // let num2 = parseInt(prompt("num 2"));

// // document.write(`${num1} ${operator} ${num2} = ${calculate(operator, num1, num2)}`);


// // var one = document.getElementById("one").innerHTML;
// // var two = document.getElementById("two").innerHTML;
// // var three = document.getElementById("three").innerHTML;
// // var four = document.getElementById("four").innerHTML;
// // var five = document.getElementById("five").innerHTML;
// // var six = document.getElementById("six").innerHTML;
// // var seven = document.getElementById("seven").innerHTML;
// // var eight = document.getElementById("eight").innerHTML;
// // var nine = document.getElementById("nine").innerHTML;
// // var zero = document.getElementById("zero").innerHTML;
// // var dividing = document.getElementById("divide").innerHTML;
// // var multipling = document.getElementById("multiply").innerHTML;
// // var addition = document.getElementById("addition").innerHTML;
// // var subtraction = document.getElementById("subtraction").innerHTML;
// // var total = document.getElementById("total").innerHTML;
// // var delet = document.getElementById("delet").innerHTML;

// function oneclick() {
//     var one = document.getElementById("one").innerHTML;
//     console.log(one);
//     disply.innerText = one;
// }
// function twoclick() {
//     var two = document.getElementById("two").innerHTML;
//     console.log(two);
//     disply.innerText = two;
// }
// function threeclick() {
//     var three = document.getElementById("three").innerHTML;
//     disply.innerText = three;
//     console.log(three);
// }
// function fourclick() {
//     var four = document.getElementById("four").innerHTML;
//     console.log(four);
//     disply.innerText = four;
// }
// function fiveclick() {
//     var five = document.getElementById("five").innerHTML;
//     disply.innerText = five;
//     console.log(five);
// }
// function sixclick() {
//     var six = document.getElementById("six").innerHTML;
//     disply.innerText = six;
//     console.log(six);
// }
// function sevenclick() {
//     var seven = document.getElementById("seven").innerHTML;
//     disply.innerText = seven;
//     console.log(seven);
// }
// function eightclick() {
//     var eight = document.getElementById("eight").innerHTML;
//     disply.innerText = eight;
//     console.log(eight);
// }
// function nineclick() {
//     var nine = document.getElementById("nine").innerHTML;
//     disply.innerText = nine;
//     console.log(nine);
// }
// function zeroclick() {
//     var zero = document.getElementById("zero").innerHTML;
//     disply.innerText = zero;
//     console.log(zero);
// }
// function multiplyclick() {
//     var multipling = document.getElementById("multiply").innerHTML;
//     disply.innerText = multipling;
//     console.log(multipling);
// }
// function divideclick() {
//     var dividing = document.getElementById("divide").innerHTML;
//     disply.innerText = dividing;
//     console.log(dividing);

// }
// function additionclick() {
//     var addition = document.getElementById("addition").innerHTML;
//     disply.innerText = addition;
//     console.log(addition);
// }
// function subclick() {
//     var subtraction = document.getElementById("subtraction").innerHTML;
//     disply.innerText = subtraction;
//     console.log(subtraction);
// }
// function totalclick() {
//     var total = document.getElementById("total").innerHTML;
//     disply.innerText = total;
//     console.log(total);
// }
// function deletclick() {
//     var delet = document.getElementById("delet").innerHTML;
//     disply.innerText = delet;
//     console.log(delet);
// }



// var disply = document.getElementById('dis');
// // disply.innerHTML = `${num1} ${operator} ${num2} = ${calculate(operator, num1, num2)}`;































// // document.write(
// //     one,
// //     `<br>`,
// //     two,
// //     `<br>`,
// //     three,
// //     `<br>`,
// //     four,
// //     `<br>`,
// //     five,
// //     `<br>`,
// //     six,
// //     `<br>`,
// //     seven,
// //     `<br>`,
// //     eight,
// //     `<br>`,
// //     nine,
// //     `<br>`,
// //     zero,
// //     `<br>`,
// //     multipling,
// //     `<br>`,
// //     dividing,
// //     `<br>`,
// //     addition,
// //     `<br>`,
// //     subtraction,
// //     `<br>`,
// //     total,
// //     `<br>`,
// //     delet
// // )

let displayScreen = document.getElementById("display-screen");
console.log(displayScreen);
let currentDisplay = "";

function btnClicker(str) {
    if (str === "/") {
        currentDisplay = currentDisplay + "/";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "%") {
        currentDisplay = currentDisplay + "%";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "+") {
        currentDisplay = currentDisplay + "+";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "-") {
        currentDisplay = currentDisplay + "-";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "*") {
        currentDisplay = currentDisplay + "*";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "1") {
        currentDisplay = currentDisplay + "1";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "2") {
        currentDisplay = currentDisplay + "2";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "3") {
        currentDisplay = currentDisplay + "3";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "4") {
        currentDisplay = currentDisplay + "4";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "5") {
        currentDisplay = currentDisplay + "5";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "6") {
        currentDisplay = currentDisplay + "6";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "7") {
        currentDisplay = currentDisplay + "7";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "8") {
        currentDisplay = currentDisplay + "8";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "9") {
        currentDisplay = currentDisplay + "9";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "0") {
        currentDisplay = currentDisplay + "0";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === ".") {
        currentDisplay = currentDisplay + ".";
        displayScreen.innerHTML = currentDisplay;
    } else if (str === "AC") {
        currentDisplay = "";
        let noDisplay = "0";
        displayScreen.innerHTML = noDisplay
    } else {
        console.log("Button Function not Working");
    }
}

function result() {
    let finalResult = eval(currentDisplay);
    if (currentDisplay === "") {
        finalResult = 0;
        displayScreen.innerHTML = finalResult;
        return;
    }
    displayScreen.innerHTML = finalResult;
    currentDisplay = "";
}