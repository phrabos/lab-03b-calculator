//selectors
const addSubmit = document.getElementById("submit-add");
const subtractSubmit = document.getElementById("submit-subtract");
const multiplySubmit = document.getElementById("submit-multiply");
const divideSubmit = document.getElementById("submit-divide");



//event listeners
addSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const addResult = (parseInt(addInput1.value)) + parseInt((addInput2.value));
    const addAnswer = document.getElementById("result-add");
    addAnswer.innerText = addResult;

});

subtractSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const subtractResult = (parseInt(subInput1.value)) - parseInt((subInput2.value));
    const subAnswer = document.getElementById("result-subtract");
    subAnswer.innerText = subtractResult;
});

multiplySubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const multiplyResult = (parseInt(multInput1.value)) * parseInt((multInput2.value));
    const multAnswer = document.getElementById("result-multiply");
    multAnswer.innerText = multiplyResult;
});

divideSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const divideResult = (parseInt(divInput1.value)) / parseInt((divInput2.value));
    const divAnswer = document.getElementById("result-divide");
    divAnswer.innerText = divideResult;
});

