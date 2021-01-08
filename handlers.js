//import
import { inputArray, resetArray } from "./app.js";
import { resetFields, calcAnswer, buildString, pushInput } from "./utils.js";


export function onAddClick(){
    pushInput();
    inputArray.push("+");
    buildString();
    resetArray();
}

export function onSubClick(){
    pushInput();
    inputArray.push("-");
    buildString();
    resetArray();
}
export function onMultClick(){
    pushInput();
    inputArray.push("*");
    buildString();
    resetArray();
}
export function onDivClick(){
    pushInput();
    inputArray.push("/");
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

export function onOneClick(){
    pushInput();
    inputArray.push("1");
    buildString();
    resetArray();
}
export function onTwoClick(){
    pushInput();
    inputArray.push("2");
    buildString();
    resetArray();
}
export function onThreeClick(){
    pushInput();
    inputArray.push("3");
    buildString();
    resetArray();
}
export function onFourClick(){
    pushInput();
    inputArray.push("4");
    buildString();
    resetArray();
}
export function onFiveClick(){
    pushInput();
    inputArray.push("5");
    buildString();
    resetArray();
}
export function onSixClick(){
    pushInput();
    inputArray.push("6");
    buildString();
    resetArray();
}
export function onSevenClick(){
    pushInput();
    inputArray.push("7");
    buildString();
    resetArray();
}
export function onEightClick(){
    pushInput();
    inputArray.push("8");
    buildString();
    resetArray();
}
export function onNineClick(){
    pushInput();
    inputArray.push("9");
    buildString();
    resetArray();
}
export function onZeroClick(){
    pushInput();
    inputArray.push("0");
    buildString();
    resetArray();
}