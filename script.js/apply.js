document.getElementById("cal-btn").addEventListener("click", function () {
    function getTotal() {
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
    getTotal();
})
