//variables
let plusBtn, minusBtn, inputVal, val, result, res;

//cached elements
plusBtn = document.getElementById("plus");
minusBtn = document.getElementById("minus");
inputField = document.getElementById("num");
result = document.querySelector("h1");

//event listeners
plusBtn.addEventListener("click", plusClick);
minusBtn.addEventListener("click", minusClick);

//functions
init();
function plusClick() {
    res = parseInt(result.textContent);
    val = parseInt(inputField.value);
    if(isNaN(val))return;

    result.textContent = add(res, val);
    render(result.textContent);
    return ;
}
function minusClick() {
    res = parseInt(result.textContent);
    val = parseInt(inputField.value);
    if(isNaN(val))return;
    result.textContent = substract(res, val);
    render(result.textContent);
    return ;
}
function init() {
    result.textContent = 0;
    inputField.value = 1;
}
function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function render(r) {
    if (parseInt(result.textContent) < 0) {
        result.style.color = "red";
    } else {
        result.style.color = "black";
    }

}
console.log(result);
console.log(parseInt(result.textContent));
