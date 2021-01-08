//imports
import { inputArray, resetArray } from "./app.js";

// function to calculate inputs
const inputBoxOne = document.getElementById("input1");
const resultBox = document.getElementById('result-box');


export function buildString(){
    const newInputString = inputArray.toString().replace(",","");
    inputBoxOne.value=newInputString;
}

export function pushInput(){
    inputArray.push(inputBoxOne.value);
    
}
export function resetFields(){
    inputBoxOne.value="";
    resultBox.textContent="";
}
export function calcAnswer(){
    let result = eval(inputBoxOne.value);
    resultBox.textContent= result;
    return result;
}






// export function calcFunction () {
//     // set inputs to a number value
//     const inputOne = Number(input1.value);
//     const inputTwo = Number(input2.value);


//     // set the variable to the ID of the button clicked
//     whatButtonClicked=this.id

//         // compare ID of button clicked to ID of math operators
//         switch (whatButtonClicked) {
//                 case "add-button":
//                     const addResult = inputOne + inputTwo;    
//                     resultBox.innerText = addResult;
//                     break;
//                 case "subtract-button":
//                     const subResult = inputOne - inputTwo;    
//                     resultBox.innerText = subResult;
//                     break;
//                 case "divide-button":
//                     const divResult = inputOne / inputTwo;    
//                     resultBox.innerText = divResult;
//                     break;  
//                 case "multiply-button":
//                     const multResult = inputOne * inputTwo;    
//                     resultBox.innerText = multResult;
//                     break;    
//             }
// };