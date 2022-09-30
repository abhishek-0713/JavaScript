let productsData = JSON.parse(localStorage.getItem("products")) || [];

productsData.forEach( function(element, index){

    let div = document.createElement("div");
    div.className = "container";

    let Type = document.createElement("h2");
    Type.innerText = element.Type;

    let Desk = document.createElement("p");
    Desk.innerText = element.Description;

    let Price = document.createElement("h3");
    Price.innerText = `$ ${element.Price}`;

    let Img = document.createElement("img");
    Img.src = element.Image;

    let Button = document.createElement("button");
    Button.id = "remove_product";
    Button.innerText = "Remove" ;
    Button.addEventListener("click", function(){

        remove(index);

    })


    div.append(Img,Type,Price,Desk,Button);

    document.getElementById("all_products").append(div);

});


function remove(index){

    productsData.splice(index, 1);

    localStorage.setItem("products", JSON.stringify(productsData));

    window.location.reload();
}

