document.getElementById("cal-btn").addEventListener("click", function () {
    // console.log(200);
    const foodPrice = document.getElementById("food-price");
    const foodTotal = foodPrice.value;

    const totalExpensive = document.getElementById("total-exp");
    const totalExpensiveValue = totalExpensive.innerText;
    totalExpensive.innerText = foodTotal;
    console.log(totalExpensive.innerText);


})