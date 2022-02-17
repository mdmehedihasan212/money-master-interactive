document.getElementById("cal-btn").addEventListener("click", function () {
    function getTotal() {
        let foodValue = document.getElementById("food-price").value;
        let rentValue = document.getElementById("rent-price").value;
        let clothesValue = document.getElementById("clothes-price").value;
        let totalExpenses = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothesValue);

        document.getElementById("total-expenses").innerText = totalExpenses;
    }
    getTotal();
})
