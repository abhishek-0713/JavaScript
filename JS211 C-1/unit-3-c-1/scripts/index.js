//store the products array in localstorage as "products"


let form = document.getElementById("products");
let productArray = JSON.parse(localStorage.getItem("products")) || [];

function products(){
    event.preventDefault();

    let Type = form.type.value; 
    let Description = form.desk.value;
    let Price = form.price.value;
    let Image = form.image.value;


    let productObject = new productInfo(Type,Description,Price,Image);

    productArray.push(productObject);

    localStorage.setItem("products", JSON.stringify(productArray));

    document.getElementById("type").value = null;
    document.getElementById("desk").value = null;
    document.getElementById("price").value = null;
    document.getElementById("image").value = null;

}

function productInfo(Type,Description,Price,Image){

    this.Type = Type;
    this.Description = Description;
    this.Price = Price;
    this.Image = Image;
}