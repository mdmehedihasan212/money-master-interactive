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
        // console.log(saveInput);
        // add total saving balance
        let incomeMoney = document.getElementById("income-money").value;

        // add total balance value
        let totalBalance = document.getElementById("total-balance").innerText
        // division
        let saveingAmount = incomeMoney / saveInput;

        // let remaing amount 
        let remaingAmount = totalBalance - saveingAmount;
        // update save balance
        document.getElementById("saving-amount").innerText = saveingAmount;

        // update remaing balance
        document.getElementById("remaining-balance").innerText = remaingAmount;

    }
    saveMoney()
})


