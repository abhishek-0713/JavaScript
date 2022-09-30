// Add the coffee to local storage with key "coffee"

const url = `https://masai-api.herokuapp.com/coffee/menu`;

async function getData(){

    try {

        let res = await fetch(url);

        let data = await res.json();
        appendData(data.menu.data);
        
    } catch (error) {
        
        console.log(error);
    }

}
getData();

let coffee = JSON.parse(localStorage.getItem("coffee")) || [];
let counter = localStorage.getItem("myStorageCount") || 0;
let cartTotal = +localStorage.getItem("myCartTotal") || 0;


function  appendData(data){
   

    data.forEach((element) =>{

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
        button.id= "add_to_bucket";
        button.innerText = "Add To Bucket";

        button.addEventListener("click", function() {

            if (addtoCart(element.id) === true) {

              alert("Coffee Added To Bucket");

              coffee.push(element);
              localStorage.setItem("coffee", JSON.stringify(coffee));
        
              counter++;
              localStorage.setItem("myStorageCount", counter);
              document.getElementById("coffee_count").innerText = counter; 
        
              cartTotal +=  element.price;
              localStorage.setItem("myCartTotal", cartTotal);

            }
            else{
                alert("This Coffee Already Added To Bucket")
            }
        });



        div.append(image,Title,price,id,button);
        document.getElementById("menu").append(div);
        
    });
}


function addtoCart(id) {
    let filtered = coffee.filter(function (element) {
      return element.id === id;
    });

    if (filtered.length > 0) {
      return false;
    } else {
      return true;
    }
  }
