// On clicking remove button the item should be removed from DOM as well as localstorage.

let coffee = JSON.parse(localStorage.getItem("coffee")) || [];
let cartTotal = localStorage.getItem("myCartTotal") || 0;
let counter = localStorage.getItem("myStorageCount") || 0;

document.getElementById("total_amount").innerText = cartTotal;
document.getElementById("total_items").innerText = `Total Coffee Items: ${counter}`;

appendData(coffee);

function  appendData(data){
   

    data.forEach((element,index) =>{

        let div = document.createElement("div");
        div.className = "subContainer";

        let image = document.createElement("img");
        image.src = element.image;

        let Title = document.createElement("h1");
        Title.innerText = element.title;

        let price = document.createElement("h2");
        price.innerText = `$ ${element.price}`;

        let id = document.createElement("h2");
        id.innerText = `ID : ${element.id}`;


        let button = document.createElement("button");
        button.id= "remove_coffee";
        button.innerText = "Remove";
        button.addEventListener("click", function() {

            Remove(element, index);

                 
        });



        div.append(image,Title,price,id,button);
        document.getElementById("bucket").append(div);
        
    });
}

function Remove(element,index){

    coffee.splice(index, 1);
    localStorage.setItem("coffee", JSON.stringify(coffee));
        
              counter--;
              localStorage.setItem("myStorageCount", counter);
              
        
              cartTotal -=  element.price;
              console.log(cartTotal);
              localStorage.setItem("myCartTotal", cartTotal);

    window.location.reload();

}