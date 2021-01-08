//import
import { inputArray, resetArray } from "./app.js";
import { resetFields, calcAnswer, buildString, pushInput } from "./utils.js";

export function onOperatorClick(e){
    pushInput();
    inputArray.push(e.target.value);
    buildString();
    resetArray();
}

export function onEqualsClick(){
    calcAnswer();
}

export function onClearClick(){
    resetFields();
    resetArray();
}

export function onNumClick(e){
    pushInput();
    inputArray.push(e.target.value);
    buildString();
    resetArray();
}

