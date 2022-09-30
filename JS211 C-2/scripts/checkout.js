

function checkOut(){

    event.preventDefault();

    alert("Your order is Accepted ");

    setTimeout(() => {
        
        alert("Your order is being Prepared ");
    }, 3000);

    setTimeout(() => {
        
        alert("Your order is being packed ");
    }, 8000);

    setTimeout(() => {
        
        alert("Your order is out for delivery  ");
    }, 10000);

    setTimeout(() => {
        
        alert("Order delivered ");
    }, 12000);
}