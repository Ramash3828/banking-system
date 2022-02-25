// Banking Part

// Get Value
function getInput(inputId) {
    let inputValue = document.getElementById(inputId);
    let money = parseFloat(inputValue.value);
    inputValue.value = "";
    return money;
}
// Update Value
function updateDipositField(updateField, Money) {
    let totalField = document.getElementById(updateField);
    let totalValue = parseFloat(totalField.innerText);
    totalField.innerText = totalValue + Money;
}
// Update Blance
function currentBlance() {
    let blance = document.getElementById("blance");
    let blanceValue = parseFloat(blance.innerText);
    return blanceValue;
}

function updateBlance(money, isAdd) {
    let blance = document.getElementById('blance');
    let blanceValue = currentBlance();

    // let blanceValue = parseFloat(blance.innerText);
    if (isAdd == true) {
        blance.innerText = blanceValue + money;
    } else {
        blance.innerText = blanceValue - money;
    }
}

// Diposit
document.getElementById('dipositBtn').addEventListener('click', function() {
    // Get Value
    let dipositMoney = getInput('dipositMoney');
    // Update Value
    if (dipositMoney > 0) {
        updateDipositField("diposit", dipositMoney);
        // Update Blance
        updateBlance(dipositMoney, true)
    }
});

// Witdraw
document.getElementById('withdrawBtn').addEventListener('click', function() {
    // Get Value
    let withdrawMoney = getInput('withdrawMoney');

    // Update Value
    let currentValue = currentBlance();
    if (withdrawMoney > currentValue) {
        confirm("Your blance is very low. Diposit Please!")
    } else if (withdrawMoney > 0) {
        updateDipositField("withdraw", withdrawMoney);
        // Update Blance
        updateBlance(withdrawMoney, false)
    }
});

// Logout
let logout = document.getElementById('logout');
logout.addEventListener('click', function() {
    window.location.href = "index.html";
});