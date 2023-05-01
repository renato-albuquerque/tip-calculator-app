// Variables

const inputBill = document.querySelector("#billValue");
const btn5 = document.querySelector("#btn5");
const btn10 = document.querySelector("#btn10");
const btn15 = document.querySelector("#btn15");
const btn25 = document.querySelector("#btn25");
const btn50 = document.querySelector("#btn50");
/* const tipButtons = document.querySelector(".btnPercentage"); */
const inputCustom = document.querySelector(".inputCustom");
const inputPeople = document.querySelector("#qtyPerPerson");
const errorMessage = document.querySelector(".alertMessage");
const borderMessage = document.querySelector(".alertBorder");
const tipResult = document.querySelector("#tipResult"); 
const totalResult = document.querySelector("#totalResult");
const btnReset = document.querySelector(".buttonReset");

let billAmount, numPeople, tipValue, tipTotal, tipPerson, totalPerson;

// Functions

// Get the Values

function getBillValue() {
    inputBill.addEventListener('change', function() {
        billAmount = Number(inputBill.value);
        console.log(billAmount);
    }
  )}
  getBillValue()

function getNumberOfPeople() {
    inputPeople.addEventListener('change', function() {
        numPeople = Number(inputPeople.value);
        console.log(numPeople);
        calculate()
    }
  )}
  getNumberOfPeople()

function getTipTax() {

}

function getTipTaxCustom() {
    inputCustom.addEventListener('change', function() {
        tipValue = Number(inputCustom.value);
        console.log(tipValue);
        calculate()
    }
  )}
  getTipTaxCustom()

// Calculate

function calculate() {
    if(billAmount > 0 && tipValue > 0 && numPeople > 0) {
    
      let amountTip = billAmount * (tipValue / 100);
      let amountTipByPerson = amountTip / numPeople;
      let amount = billAmount + amountTip;
      let amountByPerson = amount / numPeople;
  
      tipResult.textContent = `$${amountTipByPerson.toFixed(2)}`;
      totalResult.textContent = `$${amountByPerson.toFixed(2)}`;
    }
  }

function resetBtn() {
    inputBill.value = "";
    inputPeople.value = "";
    inputCustom.value = "";
    /* percentBtns.forEach(function(btn) {  // Check after.
        btn.classList.remove("btnPercentageSelected");
      }); */
    errorMessage.classList.add("alertMessage");
    /* borderMessage.classList.add("borderMessage"); */
    btnReset.classList.remove("buttonResetSelected-2");
    tipResult.textContent = "$0.00";  
    totalResult.textContent = "$0.00";    
}

// Events

inputPeople.addEventListener("change", function() {
    numPeople = Number(inputPeople.value);
    if (numPeople !== 0) {
        errorMessage.classList.add("alertMessage");
    } else if (numPeople === 0) {
        errorMessage.classList.remove("alertMessage");
    }
  });

btn5.addEventListener("click", function() {
    numPeople = Number(inputPeople.value);
    if(numPeople === 0) {
        errorMessage.classList.remove("alertMessage")
        errorMessage.style.color = "red"
        errorMessage.style.fontSize = "14px"
    } else {
        errorMessage.classList.add("alertMessage")
    }
})

btn10.addEventListener("click", function() {
    numPeople = Number(inputPeople.value);
    if(numPeople === 0) {
        errorMessage.classList.remove("alertMessage")
        errorMessage.style.color = "red"
        errorMessage.style.fontSize = "14px"
    } else {
        errorMessage.classList.add("alertMessage")
    }
})

btn15.addEventListener("click", function() {
    numPeople = Number(inputPeople.value);
    if(numPeople === 0) {
        errorMessage.classList.remove("alertMessage")
        errorMessage.style.color = "red"
        errorMessage.style.fontSize = "14px"
    } else {
        errorMessage.classList.add("alertMessage")
    }
})

btn25.addEventListener("click", function() {
    numPeople = Number(inputPeople.value);
    if(numPeople === 0) {
        errorMessage.classList.remove("alertMessage")
        errorMessage.style.color = "red"
        errorMessage.style.fontSize = "14px"
    } else {
        errorMessage.classList.add("alertMessage")
    }
})

btn50.addEventListener("click", function() {
    numPeople = Number(inputPeople.value);
    if(numPeople === 0) {
        errorMessage.classList.remove("alertMessage")
        errorMessage.style.color = "red"
        errorMessage.style.fontSize = "14px"
    } else {
        errorMessage.classList.add("alertMessage")
    }
})    

inputCustom.addEventListener("click", function() {
    numPeople = Number(inputPeople.value);
    if(numPeople === 0) {
        errorMessage.classList.remove("alertMessage")
        errorMessage.style.color = "red"
        errorMessage.style.fontSize = "14px"
    } else {
        errorMessage.classList.add("alertMessage")
    }
})

btnReset.addEventListener("click", resetBtn);

inputBill.addEventListener("change", function () {
        billAmount = Number(inputBill.value);
        numPeople = Number(inputPeople.value);
  
    if (billAmount !== 0) {
        btnReset.classList.add("buttonResetSelected-2");
    }
  
    /* if (numPeople === 0) {   // Check after.
        btnReset.classList.add("buttonResetSelected-1");
    } */
  });