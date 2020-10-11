var item = /** @class */ (function () {
    function item() {
    }
    return item;
}());
function checkoutBalance() {
    var pizza = new item();
    pizza.amount = parseInt(document.getElementById("pizzaamount").value, 10);
    pizza.price = parseInt(document.getElementById("pizza").value, 10);
    var inputElement = document.getElementById("pizza");
    pizza.isChecked = inputElement.checked;
    var burger = new item();
    burger.amount = parseInt(document.getElementById("burgeramount").value, 10);
    burger.price = parseInt(document.getElementById("burger").value, 10);
    inputElement = document.getElementById("burger");
    burger.isChecked = inputElement.checked;
    var crepe = new item();
    crepe.amount = parseInt(document.getElementById("crepeamount").value, 10);
    crepe.price = parseInt(document.getElementById("crepe").value, 10);
    inputElement = document.getElementById("crepe");
    crepe.isChecked = inputElement.checked;
    var sum = 0;
    var element = document.getElementById("pizza");
    var isChecked = element.checked;
    if (pizza.isChecked == true) {
        sum = sum + (pizza.amount * pizza.price);
    }
    if (burger.isChecked == true) {
        sum = sum + (burger.amount * burger.price);
    }
    if (crepe.isChecked == true) {
        sum = sum + (crepe.amount * crepe.price);
    }
    if (confirm("The totalsum is " + sum + "\n Confirm order?") == true) {
        document.getElementById("confirmed").innerHTML = "Order Confirmed";
    }
}
