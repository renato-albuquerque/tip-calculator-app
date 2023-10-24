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
const borderMessage = document.querySelector(".alertBorder");
const tipResult = document.querySelector("#tipResult"); 
const totalResult = document.querySelector("#totalResult");
const btnReset = document.querySelector(".buttonReset");

let billAmount, numPeople, tipValue5, tipValue10, tipValue15, tipValue25, tipValue50, tipValue, tipTotal, tipPerson, totalPerson;

// Functions

    // Get the Values

        // Bill value

function getBillValue() {
    inputBill.addEventListener('change', function() {
        billAmount = Number(inputBill.value);
        console.log(billAmount);
    }
)}
getBillValue()

        // Tip values

function getTipTax5() {
    btn5.addEventListener("click", function() {
        tipValue5 = Number(btn5.value);
        console.log(tipValue5);
    })
}
getTipTax5()

function getTipTax10() {
    btn10.addEventListener("click", function() {
        tipValue10 = Number(btn10.value);
        console.log(tipValue10);
    })
}
getTipTax10()

function getTipTax15() {
    btn15.addEventListener("click", function() {
        tipValue15 = Number(btn15.value);
        console.log(tipValue15);
    })
}
getTipTax15()

function getTipTax25() {
    btn25.addEventListener("click", function() {
        tipValue25 = Number(btn25.value);
        console.log(tipValue25);
    })
}
getTipTax25()

function getTipTax50() {
    btn50.addEventListener("click", function() {
        tipValue50 = Number(btn50.value);
        console.log(tipValue50);
    })
}
getTipTax50()

function getTipTaxCustom() {
    inputCustom.addEventListener('change', function() {
        tipValue = Number(inputCustom.value);
        console.log(tipValue);
    }
)}
getTipTaxCustom()

        // Number of people value

function getNumberOfPeople() {
    inputPeople.addEventListener('change', function() {
        numPeople = Number(inputPeople.value);
        console.log(numPeople);
        calculate()
    }
)}
getNumberOfPeople()

    // Calculate

function calculate() {
    if(billAmount > 0 && tipValue5 == 5 && numPeople > 0) {
        let amountTip = billAmount * (tipValue5 / 100);
        let amountTipByPerson = amountTip / numPeople;
        let amount = billAmount + amountTip;
        let amountByPerson = amount / numPeople;
    
        tipResult.textContent = `$${amountTipByPerson.toFixed(2)}`;
        totalResult.textContent = `$${amountByPerson.toFixed(2)}`;

    }   else if(billAmount > 0 && tipValue10 == 10 && numPeople > 0) {
        let amountTip = billAmount * (tipValue10 / 100);
        let amountTipByPerson = amountTip / numPeople;
        let amount = billAmount + amountTip;
        let amountByPerson = amount / numPeople;
    
        tipResult.textContent = `$${amountTipByPerson.toFixed(2)}`;
        totalResult.textContent = `$${amountByPerson.toFixed(2)}`;

    }   else if(billAmount > 0 && tipValue15 == 15 && numPeople > 0) {
        let amountTip = billAmount * (tipValue15 / 100);
        let amountTipByPerson = amountTip / numPeople;
        let amount = billAmount + amountTip;
        let amountByPerson = amount / numPeople;
    
        tipResult.textContent = `$${amountTipByPerson.toFixed(2)}`;
        totalResult.textContent = `$${amountByPerson.toFixed(2)}`;

    }   else if(billAmount > 0 && tipValue25 == 25 && numPeople > 0) {
        let amountTip = billAmount * (tipValue25 / 100);
        let amountTipByPerson = amountTip / numPeople;
        let amount = billAmount + amountTip;
        let amountByPerson = amount / numPeople;
    
        tipResult.textContent = `$${amountTipByPerson.toFixed(2)}`;
        totalResult.textContent = `$${amountByPerson.toFixed(2)}`;

    }   else if(billAmount > 0 && tipValue50 == 50 && numPeople > 0) {
        let amountTip = billAmount * (tipValue50 / 100);
        let amountTipByPerson = amountTip / numPeople;
        let amount = billAmount + amountTip;
        let amountByPerson = amount / numPeople;
    
        tipResult.textContent = `$${amountTipByPerson.toFixed(2)}`;
        totalResult.textContent = `$${amountByPerson.toFixed(2)}`;

    }   else if(billAmount > 0 && tipValue > 0 && numPeople > 0) {
    
        let amountTip = billAmount * (tipValue / 100);
        let amountTipByPerson = amountTip / numPeople;
        let amount = billAmount + amountTip;
        let amountByPerson = amount / numPeople;
    
        tipResult.textContent = `$${amountTipByPerson.toFixed(2)}`;
        totalResult.textContent = `$${amountByPerson.toFixed(2)}`;
      }
  }

    // Reset button 

function resetBtn() {
    inputBill.value = "";
    inputPeople.value = "";
    inputCustom.value = "";

    errorMessage.classList.add("alertMessage");
    btnReset.classList.remove("buttonResetSelected-2");
    tipResult.textContent = "$0.00";  
    totalResult.textContent = "$0.00";  

    btn5.style.backgroundColor = "#00494d"
    btn5.style.color = "white"
    btn10.style.backgroundColor = "#00494d"
    btn10.style.color = "white"
    btn15.style.backgroundColor = "#00494d"
    btn15.style.color = "white"
    btn25.style.backgroundColor = "#00494d"
    btn25.style.color = "white"
    btn50.style.backgroundColor = "#00494d"
    btn50.style.color = "white"
}

// Events

btnReset.addEventListener("click", resetBtn);

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

    btn5.style.backgroundColor = "#26c0ab"
    btn5.style.color = "#00494d"

    btn10.style.backgroundColor = "#00494d"
    btn10.style.color = "white"
    btn15.style.backgroundColor = "#00494d"
    btn15.style.color = "white"
    btn25.style.backgroundColor = "#00494d"
    btn25.style.color = "white"
    btn50.style.backgroundColor = "#00494d"
    btn50.style.color = "white"
    inputCustom.style.backgroundColor = "#00494d"
    inputCustom.style.color = "white"
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

    btn10.style.backgroundColor = "#26c0ab"
    btn10.style.color = "#00494d"

    btn5.style.backgroundColor = "#00494d"
    btn5.style.color = "white"
    btn15.style.backgroundColor = "#00494d"
    btn15.style.color = "white"
    btn25.style.backgroundColor = "#00494d"
    btn25.style.color = "white"
    btn50.style.backgroundColor = "#00494d"
    btn50.style.color = "white"
    inputCustom.style.backgroundColor = "#00494d"
    inputCustom.style.color = "white"
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

    btn15.style.backgroundColor = "#26c0ab"
    btn15.style.color = "#00494d"

    btn5.style.backgroundColor = "#00494d"
    btn5.style.color = "white"
    btn10.style.backgroundColor = "#00494d"
    btn10.style.color = "white"
    btn25.style.backgroundColor = "#00494d"
    btn25.style.color = "white"
    btn50.style.backgroundColor = "#00494d"
    btn50.style.color = "white"
    inputCustom.style.backgroundColor = "#00494d"
    inputCustom.style.color = "white"
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

    btn25.style.backgroundColor = "#26c0ab"
    btn25.style.color = "#00494d"

    btn5.style.backgroundColor = "#00494d"
    btn5.style.color = "white"
    btn10.style.backgroundColor = "#00494d"
    btn10.style.color = "white"
    btn15.style.backgroundColor = "#00494d"
    btn15.style.color = "white"
    btn50.style.backgroundColor = "#00494d"
    btn50.style.color = "white"
    inputCustom.style.backgroundColor = "#00494d"
    inputCustom.style.color = "white"
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

    btn50.style.backgroundColor = "#26c0ab"
    btn50.style.color = "#00494d"

    btn5.style.backgroundColor = "#00494d"
    btn5.style.color = "white"
    btn10.style.backgroundColor = "#00494d"
    btn10.style.color = "white"
    btn15.style.backgroundColor = "#00494d"
    btn15.style.color = "white"
    btn25.style.backgroundColor = "#00494d"
    btn25.style.color = "white"
    inputCustom.style.backgroundColor = "#00494d"
    inputCustom.style.color = "white"
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

    inputCustom.style.backgroundColor = "#26c0ab"
    inputCustom.style.color = "#00494d"

    btn5.style.backgroundColor = "#00494d"
    btn5.style.color = "white"
    btn10.style.backgroundColor = "#00494d"
    btn10.style.color = "white"
    btn15.style.backgroundColor = "#00494d"
    btn15.style.color = "white"
    btn25.style.backgroundColor = "#00494d"
    btn25.style.color = "white"
    btn50.style.backgroundColor = "#00494d"
    btn50.style.color = "white"
})

inputBill.addEventListener("change", function () {
        billAmount = Number(inputBill.value);
        numPeople = Number(inputPeople.value);
  
    if (billAmount !== 0) {
        btnReset.classList.add("buttonResetSelected-2");
    }
});

