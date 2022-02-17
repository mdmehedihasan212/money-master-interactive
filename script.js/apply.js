document.getElementById("cal-btn").addEventListener("click", function () {
    function updateBalance() {
        // Input value show
        let foodValue = document.getElementById("food-price").value;
        let rentValue = document.getElementById("rent-price").value;
        let clothesValue = document.getElementById("clothes-price").value;
        // Input value sum
        let totalExpenses = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothesValue);
        // Total Expenses
        let incomeMoney = document.getElementById("income-money").value;
        let ExpensesAmount = incomeMoney - totalExpenses;
        // Update Expenses and Balance
        document.getElementById("total-expenses").innerText = totalExpenses;
        document.getElementById("total-balance").innerText = ExpensesAmount;
    }
    updateBalance()
})

document.getElementById("save-btn").addEventListener("click", function () {
    function saveMoney() {
        // Input value show
        let saveInput = document.getElementById("save-input").value;
        // Saveing Amount
        let saveAmount = ExpensesAmount - saveInput;
        // Reaining Balance
        let remainingBalance = ExpensesAmount - saveAmount;
        // update saveing Amount
        document.getElementById("saving-amount").innerText = saveAmount;
        document.getElementById("remaining-balance").innerText = remainingBalance;
    }
    saveMoney()
})
