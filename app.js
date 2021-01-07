//imports

//selectors
const inputBoxOne = document.getElementById("input1");
const resultBox = document.getElementById('result-box');
const clearButton = document.getElementById("clear-button");
const equalsButton = document.getElementById("equal-button");
const addButton = document.getElementById("add-button");
const subButton = document.getElementById("subtract-button");
const multButton = document.getElementById("multiply-button");
const divButton = document.getElementById("divide-button");

//number selectors
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");


let inputArray = [];


// set event listeners for operator buttons
addButton.addEventListener("click", () => {
    inputArray.push(inputBoxOne.value);
    inputArray.push("+");
    const newInputString = inputArray.toString().replace(",","");
    inputBoxOne.value=newInputString;
    inputArray=[];
});

subButton.addEventListener("click", () => {
    inputArray.push(inputBoxOne.value);
    inputArray.push("-");
    const newInputString = inputArray.toString().replace(",","");
    inputBoxOne.value=newInputString;
    inputArray=[];
});

multButton.addEventListener("click", () => {
    inputArray.push(inputBoxOne.value);
    inputArray.push("*");
    const newInputString = inputArray.toString().replace(",","");
    inputBoxOne.value=newInputString;
    inputArray=[];
});

divButton.addEventListener("click", () => {
    inputArray.push(inputBoxOne.value);
    inputArray.push("/");
    const newInputString = inputArray.toString().replace(",","");
    inputBoxOne.value=newInputString;
    inputArray=[];
});



equalsButton.addEventListener("click", () => {
    let result = eval(inputBoxOne.value);
    resultBox.textContent= result;  
});

//set event listener for clear button
clearButton.addEventListener("click", () =>{
    inputBoxOne.value="";
    resultBox.textContent="";
    inputArray = [];
});

// set event listener for number buttons
one.addEventListener("click", () => {
    inputArray.push(inputBoxOne.value);
    inputArray.push("1");
    const newInputString = inputArray.toString().replace(",","");
    inputBoxOne.value=newInputString;
    inputArray=[];
});

two.addEventListener("click", () => {
    inputArray.push(inputBoxOne.value);
    inputArray.push("2");
    const newInputString = inputArray.toString().replace(",","");
    inputBoxOne.value=newInputString;
    inputArray=[];
});

three.addEventListener("click", () => {
    inputArray.push(inputBoxOne.value);
    inputArray.push("3");
    const newInputString = inputArray.toString().replace(",","");
    inputBoxOne.value=newInputString;
    inputArray=[];
});

four.addEventListener("click", () => {
    inputArray.push(inputBoxOne.value);
    inputArray.push("4");
    const newInputString = inputArray.toString().replace(",","");
    inputBoxOne.value=newInputString;
    inputArray=[];
});
five.addEventListener("click", () => {
    inputArray.push(inputBoxOne.value);
    inputArray.push("5");
    const newInputString = inputArray.toString().replace(",","");
    inputBoxOne.value=newInputString;
    inputArray=[];
});
six.addEventListener("click", () => {
    inputArray.push(inputBoxOne.value);
    inputArray.push("6");
    const newInputString = inputArray.toString().replace(",","");
    inputBoxOne.value=newInputString;
    inputArray=[];
});
seven.addEventListener("click", () => {
    inputArray.push(inputBoxOne.value);
    inputArray.push("7");
    const newInputString = inputArray.toString().replace(",","");
    inputBoxOne.value=newInputString;
    inputArray=[];
});
eight.addEventListener("click", () => {
    inputArray.push(inputBoxOne.value);
    inputArray.push("8");
    const newInputString = inputArray.toString().replace(",","");
    inputBoxOne.value=newInputString;
    inputArray=[];
});
nine.addEventListener("click", () => {
    inputArray.push(inputBoxOne.value);
    inputArray.push("9");
    const newInputString = inputArray.toString().replace(",","");
    inputBoxOne.value=newInputString;
    inputArray=[];
});
zero.addEventListener("click", () => {
    inputArray.push(inputBoxOne.value);
    inputArray.push("0");
    const newInputString = inputArray.toString().replace(",","");
    inputBoxOne.value=newInputString;
    inputArray=[];
});







// array of button IDs used in a for-loop to assign event listeners 
// const buttonArray = document.querySelectorAll("button");
// let whatButtonClicked = "";
// function to calculate inputs (not used on revised version)

// function calcFunction () {
//         // set inputs to a number value
//         const inputOne = Number(input1.value);
//         const inputTwo = Number(input2.value);
    
    
//         // set the variable to the ID of the button clicked
//         whatButtonClicked=this.id
    
//             // compare ID of button clicked to ID of math operators
//             switch (whatButtonClicked) {
//                     case "add-button":
//                         const addResult = inputOne + inputTwo;    
//                         resultBox.innerText = addResult;
//                         break;
//                     case "subtract-button":
//                         const subResult = inputOne - inputTwo;    
//                         resultBox.innerText = subResult;
//                         break;
//                     case "divide-button":
//                         const divResult = inputOne / inputTwo;    
//                         resultBox.innerText = divResult;
//                         break;  
//                     case "multiply-button":
//                         const multResult = inputOne * inputTwo;    
//                         resultBox.innerText = multResult;
//                         break;    
//                 }
//     };







// for (let i= 0; i < buttonArray.length; i++){
// buttonArray[i].addEventListener("click", calcFunction)

// };






// subButton.addEventListener("click", calcFunction);
// divButton.addEventListener("click", calcFunction);
// multButton.addEventListener("click", calcFunction);

//selectors
// const subtractSubmit = document.getElementById("submit-subtract");
// const multiplySubmit = document.getElementById("submit-multiply");
// const divideSubmit = document.getElementById("submit-divide");
// const resSub = document.getElementById('result-subtract');
// const resMult = document.getElementById('result-multiply');
// const resDiv = document.getElementById('result-divide');
// const addSubmit = document.getElementById("submit-add");

// subButton.addEventListener("click", () => {
//     const InputOne = Number(addInput1.value);
//     const inputTwo = Number(addInput2.value);
//     const addResult = InputOne - inputTwo;    
//     resAdd.innerText = addResult;
// });


// //event listeners
// addSubmit.addEventListener("click", () => {
//     //calculate value
//     const InputOne = Number(addInput1.value);
//     const inputTwo = Number(addInput2.value);
//     const addResult = InputOne + inputTwo;
//     //round result to 2 decimal places
//     const roundAddResult = addResult.toFixed(2);
//     //display the rounded result in the result box
//     resAdd.innerText = roundAddResult;
//     //reset input/output boxes
//     addInput1.value="";
//     addInput2.value="";
//     resSub.innerText="";
//     resMult.innerText="";
//     resDiv.innerText="";

// });

// subtractSubmit.addEventListener("click", () => {
//     //calculate value
//     const subInputOne = Number(subInput1.value);
//     const subInputTwo = Number(subInput2.value);
//     const subtractResult = subInputOne- subInputTwo;
//     //round result to 2 decimal places
//     const roundSubResult = subtractResult.toFixed(2);
//     //display the rounded result in the result box
//     resSub.innerText = roundSubResult;
//     //reset input/output boxes
//     subInput1.value = "";
//     subInput2.value = "";
//     resAdd.innerText="";
//     resMult.innerText="";
//     resDiv.innerText="";
// });

// multiplySubmit.addEventListener("click", () => {
//     //calculate value
//     const multInputOne = Number(multInput1.value);
//     const multInputTwo = Number(multInput2.value);
//     const multiplyResult = multInputOne * multInputTwo;
//     //round result to 2 decimal places
//     const roundMultResult = multiplyResult.toFixed(2);
//     //display the rounded result in the result box
//     resMult.innerText = roundMultResult;
//     //reset input/output boxes
//     multInput1.value = "";
//     multInput2.value = "";
//     resSub.innerText="";
//     resAdd.innerText="";
//     resDiv.innerText="";
// });

// divideSubmit.addEventListener("click", () => {
//     //calculate value
//     const divInputOne = Number(divInput1.value);
//     const divInputTwo = Number(divInput2.value);
//     const divideResult = divInputOne / divInputTwo;
//     //round result to 2 decimal places
//     const roundDivResult = divideResult.toFixed(2);
//     //display the rounded result in the result box
//     resDiv.innerText = roundDivResult;
//     //reset input/output boxes
//     divInput1.value = "";
//     divInput2.value = "";
//     resSub.innerText="";
//     resMult.innerText="";
//     resAdd.innerText="";

// });