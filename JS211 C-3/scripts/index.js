// Store the wallet amount to your local storage with key "amount"

function Add(){

    event.preventDefault();

    let money = +localStorage.getItem("amount") || 0 ;

    let amount = +document.getElementById("amount").value;

    money = money + amount ;

    document.getElementById("wallet").innerText = money;

    localStorage.setItem("amount", JSON.stringify(money));

    document.getElementById("amount").value = null;
}