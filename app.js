//selectors
const addSubmit = document.getElementById("submit-add");
const subtractSubmit = document.getElementById("submit-subtract");
const multiplySubmit = document.getElementById("submit-multiply");
const divideSubmit = document.getElementById("submit-divide");
const resAdd = document.getElementById('result-add');
const resSub = document.getElementById('result-subtract');
const resMult = document.getElementById('result-multiply');
const resDiv = document.getElementById('result-divide');



//event listeners
addSubmit.addEventListener("click", () => {
    //calculate value
    const addResult = Number(addInput1.value) + Number(addInput2.value);
    //round result to 2 decimal places
    const roundAddResult = addResult.toFixed(2);
    //display the rounded result in the result box
    resAdd.innerText = roundAddResult;
    //reset input/output boxes
    addInput1.value="";
    addInput2.value="";
    resSub.innerText="";
    resMult.innerText="";
    resDiv.innerText="";

});

subtractSubmit.addEventListener("click", () => {
    //calculate value
    const subtractResult = Number(subInput1.value)- Number(subInput2.value);
    //round result to 2 decimal places
    const roundSubResult = subtractResult.toFixed(2);
    //display the rounded result in the result box
    resSub.innerText = roundSubResult;
    //reset input/output boxes
    subInput1.value = "";
    subInput2.value = "";
    resAdd.innerText="";
    resMult.innerText="";
    resDiv.innerText="";
});

multiplySubmit.addEventListener("click", () => {
    //calculate value
    const multiplyResult = Number(multInput1.value) * Number(multInput2.value);
    //round result to 2 decimal places
    const roundMultResult = multiplyResult.toFixed(2);
    //display the rounded result in the result box
    resMult.innerText = roundMultResult;
    //reset input/output boxes
    multInput1.value = "";
    multInput2.value = "";
    resSub.innerText="";
    resAdd.innerText="";
    resDiv.innerText="";
});

divideSubmit.addEventListener("click", () => {
    //calculate value
    const divideResult = Number((divInput1.value)) / Number((divInput2.value));
    //round result to 2 decimal places
    const roundDivResult = divideResult.toFixed(2);
    //display the rounded result in the result box
    resDiv.innerText = roundDivResult;
    //reset input/output boxes
    divInput1.value = "";
    divInput2.value = "";
    resSub.innerText="";
    resMult.innerText="";
    resAdd.innerText="";

});



