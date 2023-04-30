// Variables

const inputBill = document.querySelector("#billValue");
const btn5 = document.querySelector("#btn5");
const btn10 = document.querySelector("#btn10");
const btn15 = document.querySelector("#btn15");
const btn25 = document.querySelector("#btn25");
const btn50 = document.querySelector("#btn50");
const inputCustom = document.querySelector(".inputCustom");
const inputPeople = document.querySelector("#qtyPerPerson");
const errorMessage = document.querySelector(".alertMessage");
const tipResult = document.querySelector("#tipResult"); 
const totalResult = document.querySelector("#totalResult");
const btnReset = document.querySelector(".buttonReset");

/* let billAmount = Number(inputBill.value)
let customPercent = Number(inputCustom.value)
let numberPeople = Number(inputPeople.value) */

/* 
let billValue = 0;
let tipValue = 0; 
let numberOfPeople = 0;
 */

function getBillValue() {
    inputBill.addEventListener("change", function() {
        billValue = Number(inputBill.value)
    })
}

getBillValue()

function getTip() {

}

function getTipCustom() {

}










btn5.addEventListener("click", function() {
    errorMessage.classList.remove("alertMessage")
    errorMessage.style.color = "red"
    errorMessage.style.fontSize = "14px"
})

btn10.addEventListener("click", function() {
    errorMessage.classList.remove("alertMessage")
    errorMessage.style.color = "red"
    errorMessage.style.fontSize = "14px"
})

btn15.addEventListener("click", function() {
    errorMessage.classList.remove("alertMessage")
    errorMessage.style.color = "red"
    errorMessage.style.fontSize = "14px"
})

btn25.addEventListener("click", function() {
    errorMessage.classList.remove("alertMessage")
    errorMessage.style.color = "red"
    errorMessage.style.fontSize = "14px"
})

btn50.addEventListener("click", function() {
    errorMessage.classList.remove("alertMessage")
    errorMessage.style.color = "red"
    errorMessage.style.fontSize = "14px"
})

inputCustom.addEventListener("click", function() {
    errorMessage.classList.remove("alertMessage")
    errorMessage.style.color = "red"
    errorMessage.style.fontSize = "14px"
})

getBillValue()  
